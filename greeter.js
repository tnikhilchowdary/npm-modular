const chalk = require("chalk");

function greet(name) {
  return chalk.green.bold(`Hello, ${name}! Welcome to Week 2`);
}

console.log(greet("Nikhil"));

module.exports = greet;