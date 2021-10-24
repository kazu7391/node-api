// Modules
// Every file is module (by default)

const names = require('./module-names');
const { person2 } = require('./module-names');
const sayHello = require('./module-funcs');

require('./module-run');

sayHello(names.person1);
sayHello(person2);
sayHello(names.singlePerson.name);
sayHello(names.items[0]); 