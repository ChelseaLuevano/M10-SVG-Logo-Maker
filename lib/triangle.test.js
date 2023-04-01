const Triangle = require('./triangle.js');

// This test came from module assignment as an example test that should pass
describe('Triange', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})
