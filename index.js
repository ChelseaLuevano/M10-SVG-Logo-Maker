const inquirer = require('inquirer');
const fs = require('fs');
const logo = 'logo.svg';


// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo text',
        name: 'text',
        validate: (value) => { 
        if (value <= 3) { return true } 
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
        name: 'shapecolor',
        validate: (value) => { 
        if (value === '') { return true } 
        else { return "Enter shape color or 6 character hexadecimal numbers without hashtag" } },
    },
]


// Function to Write SVG File



// Function to initialize app



// Call Initialize App Function
