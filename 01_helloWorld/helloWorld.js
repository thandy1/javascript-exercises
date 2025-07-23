// running the function `helloWorld` should return "Hello World!"
const helloWorld = function () {
  return 'Hello, World!';
};

// module.exports is how we export the function so that it can be imported with require() in the spec file
module.exports = helloWorld;
