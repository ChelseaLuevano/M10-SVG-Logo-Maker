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
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${shape.render()} </svg>`
    }

    // settingText (text, textColor) {
    //     this.message =  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>` 
    // }  
    // settingShape (shapeType) {
    //     this.shape = shapeType.render()
    // }
}

module.exports = SVG 

