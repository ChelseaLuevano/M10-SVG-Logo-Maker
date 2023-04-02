const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Circle = require('./circle.js');
const CLI = require('./cli.js');


// Function to generate a logo (Code Help from tutor Kyle)
class SVG {
    constructor (shape){
        this.shape = shape;
    }
    render() {    
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape.render()} </svg>`
    }
}

module.exports = SVG 

