const Shapes = require('./shapes.js')

class Triangle extends Shapes {
  // Pass the shape properties as parameters through constructor
    constructor(text, textcolor, color) {
        super(text, textcolor, color)
        console.log("My Triangle class was called successfully!")
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
    }
}

module.exports = Triangle