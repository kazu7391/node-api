// Modules
// Every file is module (by default)

const names = require('./module-names');
console.log(names);
const { person2 } = require('./module-names');
const sayHello = require('./module-funcs');

sayHello(names.person1);
sayHello(person2);