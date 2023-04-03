const Square = require('../lib/square.js');

describe('Square' , () => {

    test('new Square Instance render returns a string for the corresponding SVG file with the given shape color', () => {
        const text = "text";
        const textcolor = "black";
        const color = "aqua";

        const shape = new Square (text, textcolor, color);
        const expectedRender = `<rect width="200" height="200" fill="aqua"/> <text x="100" y="125" font-size="60" text-anchor="middle" fill="black">text</text>`
        expect(shape.render()).toEqual(expectedRender);
        expect(shape.text).toEqual("text");
    })
    
})