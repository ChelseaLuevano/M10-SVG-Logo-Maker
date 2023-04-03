const Shapes = require('./shapes.js');

class Square extends Shapes {
//     // Pass the shape properties as parameters through constructor
    constructor(text, textcolor, color) {
    super(text, textcolor, color)
    
    }
    render() {
    return `<rect width="200" height="200" fill="${this.color}"/> <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
    }
}

module.exports = Square 