const inquirer = require('inquirer');
const fs = require('fs');
const logoFile = 'logo.svg';
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');
const SVG = require('./svg.js');

class CLI {
    constructor(){
        
    }

   run() {
        return inquirer
            .prompt ([
                // An array of questions for user input
                {
                    type: 'input',
                    message: 'Enter up to 3 characters for your logo text',
                    name: 'text',
                    validate: (value) => { 
                    if ((value.length <= 3) && (value.length > 1)) { return true } 
                    else { return "Must be between 1-3 characters." } },
                },
                {
                    type: 'input',
                    message: 'Enter a text color',
                    name: 'textcolor',
                    validate: (value) => { 
                    const hexadecimal = /^#[0-9A-Fa-f]+$/g;   
                    const cssColors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"]; 
                    if ((typeof value === "string")  && (value.length === 7) && (hexadecimal.test(value))) {
                     return true
                    }
                    else if (cssColors.includes(value) === true)
                        {return true }
                    else { (console.log(typeof value, value.length, hexadecimal.test(value))) 
                        return "Enter name of color or 6 character hexadecimal numbers with hashtag"} },
                },
                {
                    type: 'list',
                    message: 'Pick your logo shape',
                    name: 'shape',
                    choices: [
                        "Circle",
                        "Triangle",
                        "Square"
                    ]
                },
                {
                    type: 'input',
                    message: 'Enter a shape color',
                    name: 'color',
                    validate: (value) => { 
                        const hexadecimal = /^#[0-9A-Fa-f]+$/g;   
                        const cssColors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"]; 
                        if ((typeof value === "string")  && (value.length === 7) && (hexadecimal.test(value))) {
                         return true
                        }
                        else if (cssColors.includes(value) === true)
                            {return true }
                        else { (console.log(typeof value, value.length, hexadecimal.test(value))) 
                            return "Enter name of color or 6 character hexadecimal numbers with hashtag"} },
                },
            ])
        .then(answer => {
            let requestedShapeType = generateShape(answer.text,answer.textcolor, answer.color, answer.shape);
          // calling SVG class to create new SVG instance (Code Help from tutor Kyle)
            const svg = new SVG(requestedShapeType);
            writeToFile(svg.render(requestedShapeType));
            })
         .catch(err => {
                console.log(err);
            })
        }
} 

function generateShape(text, textcolor, color, shape){
let shapeType;
    if (shape === "Triangle") {
        shapeType = new Triangle(text, textcolor, color);
    }
    else if (shape === "Circle") {
        shapeType =  new Circle(text, textcolor, color);
    }
    else if (shape === "Square") {
       shapeType = new Square(text, textcolor, color);
    }
    else {
        console.log("generateShape function isn't working")
    }
    console.log("generateShape console log " + text,textcolor, color, shape)
    return shapeType;
}

// Function to Write SVG File
const writeToFile = function (data) {
    fs.writeFile(logoFile, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Generated logo.svg!")
    });
}

module.exports = CLI;