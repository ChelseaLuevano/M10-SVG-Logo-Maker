const Triangle = require('./triangle.js');

// This test came from module assignment as an example test that should pass
// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.


describe('Triange', () => {
    const shape = new Triangle();
    const color = "blue";
   shape.setColor("blue");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/> <text x="100" y="145" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`);
})
