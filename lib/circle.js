const Shapes = require('./shapes.js')

class Circle extends Shapes {
  // Pass the shape properties as parameters through constructor
  constructor(Color, textColor) {
    super(Color, textColor)
    this.circle = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="this.textColor">SVG</text>
    
    }
    render(shape) {
        if (shape === 'Circle' )
        return 
        
        
        (this.circle) {
         return <circle cx="150" cy="100" r="80" fill="${this.color}" />
        }
    }
   
}

module.exports = Circle 