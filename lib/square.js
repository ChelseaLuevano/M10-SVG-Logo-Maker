const Shapes = require('./shapes.js')

class Square extends Shapes {
    // Pass the shape properties as parameters through constructor
    constructor(shapeColor, textColor) {
    super(shapeColor, textColor)
    this.square = squareShape;
    }
}

module.exports = Square 