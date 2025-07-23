// require() imports the code from the .js file so that we can test it
// spec file is used to test javascript code
const helloWorld = require('./helloWorld');

// describe() is the body of the test, all it does is run the code to see if the output is correct
describe('Hello World', function () {
  // test() describes what should be happening in plain english then includes expect() which tells the test what to expect
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual("Hello, World!");
  });
});


// type `npm test helloWorld` to test the code in the terminal

// PASS - 01_helloWorld/helloWorld.spec.js
// PASS - 01_helloWorld/helloWorld-solution.spec.js