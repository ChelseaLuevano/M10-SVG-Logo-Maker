const Shapes = require('./shapes.js')

class Triangle extends Shapes {
  // Pass the shape properties as parameters through constructor
  constructor(text, textcolor, color) {
    super(text, textcolor, color)
    // this.triangle = triangleShape;
    // this.triangle = `<polygon points="50 15, 100 100, 0 100"/>`
    // this.textColor = <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>
    console.log("My Triangle class was called successfully!")
    }
}

module.exports = Triangle