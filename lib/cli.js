const inquirer = require('inquirer');
const fs = require('fs');
const logoFile = 'logo.svg';
const generateHTML = require('./generateHTML.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');


class CLI {
    constructor(){
        // this.text = `${text}`;
        // this.textcolor = `${textcolor}`;
        // this.color = `${color}`;
        // this.shape = `${shape};`
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
                    if (value === '') { return true } 
                    else { return "Enter color text or 6 character hexadecimal numbers without hashtag" } },
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
                    if (value === '') { return true } 
                    else { return "Enter shape color or 6 character hexadecimal numbers without hashtag" } },
                },
            ])
        .then(answer => {
            // this.text = `${text}`;
            // this.textcolor = `${textcolor}`;
            // this.color = `${color}`;
            // this.shape = `${shape};`
            generateShape(answer.text,answer.textcolor, answer.color, answer.shape);
            // const logoContent = generateHTML(answers);
        //     writeToFile(logoContent);
        //     })
        //  .catch(err => {
        //         console.log(err);
            })
        }
} 

function generateShape(text, textcolor, color, shape){

    if (shape === "Triangle") {
        new Triangle();
    }
    if (shape === "Cirlce") {
        new Circle();
    }
    if (shape === "Square") {
        new Square();
    }
    else {
        console.log("generateShape function isn't working")
    }
    console.log("generateShape console log" + text,textcolor, color, shape)
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