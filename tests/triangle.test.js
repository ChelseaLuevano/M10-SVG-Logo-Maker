const Triangle = require('../lib/triangle.js');

// This test came from module assignment as an example test that should pass
// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

describe('Triange' , () => {

    test('new Triange Instance render returns a string for the corresponding SVG file with the given shape color', () => {
        const text = "text";
        const textcolor = "blue";
        const color = "blue";

        const shape = new Triangle(text, textcolor, color);
        const expectedRender = `<polygon points="100 25, 200 200, 0 200" fill="blue"/> <text x="100" y="145" font-size="60" text-anchor="middle" fill="blue">text</text>`;
        // shape.setColor(color);
        expect(shape.render()).toEqual(expectedRender);
        expect(shape.color).toEqual("blue");
    })
    
})
