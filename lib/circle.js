const Shapes = require('./shapes.js')

class Circle extends Shapes {
  // Pass the shape properties as parameters through constructor
  constructor(text, textcolor, color) {
    super(text, textcolor, color)
    }
        render() {
          return 
          `<circle cx="150" cy="100" r="80" fill="${this.color}">`
          `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${text}</text>`
        }
  }
   


module.exports = Circle 