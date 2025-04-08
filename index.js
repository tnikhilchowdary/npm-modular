const greet = require('./greeter');

const name = process.argv[2] || 'Guest';

console.log(greet(name));
