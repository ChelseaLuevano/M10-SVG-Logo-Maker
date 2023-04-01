const Shapes = require('./shapes.js')

class Triangle extends Shapes {
  // Pass the shape properties as parameters through constructor
    constructor(text, textcolor, color) {
        super(text, textcolor, color)
        console.log("My Triangle class was called successfully!")
    }

    render() {
        return 
        `<polygon points="50 15, 100 100, 0 100" fill="${this.color}/>`
        `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${text}</text>`
    }
}

module.exports = Triangle