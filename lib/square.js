const Shapes = require('./shapes.js')

class Square extends Shapes {
    // Pass the shape properties as parameters through constructor
    constructor(Color, textColor) {
    super(Color, textColor)
    // this.square = squareShape;
   this.square = `<square width="100" height="100" fill="${this.color}" />`

   <text x="150" y="125" font-size="60" text-anchor="middle" fill="this.textColor">SVG</text>
    }

    render() {
        if (this.square) {

        }
    }
}

module.exports = Square 