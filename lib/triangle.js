const Shapes = require('./shapes.js')

class Triangle extends Shapes {
  // Pass the shape properties as parameters through constructor
    constructor(text, textcolor, color) {
        super(text, textcolor, color)
        console.log("My Triangle class was called successfully!")
    }
    render() {
        return `<polygon points="100 25, 200 200, 0 200" fill="${this.color}"/>
        <text x="100" y="145" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
    }
}

module.exports = Triangle