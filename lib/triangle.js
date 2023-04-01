const Shapes = require('./shapes.js')

class Triangle extends Shapes {
  // Pass the shape properties as parameters through constructor
  constructor(Color, textColor) {
    super(Color, textColor)
    // this.triangle = triangleShape;
    this.triangle = `<polygon points="50 15, 100 100, 0 100"/>`
    this.textColor = <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>

    }
}

module.exports = Triangle