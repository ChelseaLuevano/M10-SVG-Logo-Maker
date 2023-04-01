const Shapes = require('./shapes.js');

class Square extends Shapes {
//     // Pass the shape properties as parameters through constructor
    constructor(text, textcolor, color) {
    super(text, textcolor, color)
    }
   
    render() {
    `<square width="100" height="100" fill="${this.color}" />`
    `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${text}</text>`
    }
}

module.exports = Square 