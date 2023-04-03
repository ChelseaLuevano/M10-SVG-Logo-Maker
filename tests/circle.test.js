const Circle = require('../lib/circle.js');

describe('Triange' , () => {

   
        test('new Circle Instance render returns a string for the corresponding SVG file with the given shape color', () => {
            const text = "text";
            const textcolor = "fuchsia";
            const color = "gray";
    
            const shape = new Circle (text, textcolor, color);
            const expectedRender = `<circle cx="150" cy="100" r="80" fill="gray"> </circle> <text x="150" y="125" font-size="60" text-anchor="middle" fill="fuchsia">text</text>`;
            expect(shape.render()).toEqual(expectedRender);
            expect(shape.textcolor).toEqual("fuchsia");
        })
        
    })