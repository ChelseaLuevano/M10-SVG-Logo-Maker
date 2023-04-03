const Shapes = require('./shapes.js')

class Circle extends Shapes {
  // Pass the shape properties as parameters through constructor
  constructor(text, textcolor, color) {
    super(text, textcolor, color)
    }
        render() {
          return `<circle cx="150" cy="100" r="80" fill="${this.color}"> </circle> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
        }
  }
   


module.exports = Circle 