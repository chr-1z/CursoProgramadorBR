const Person = require('./Person');
const Alumn = require('./Alumn');

let marcos = new Alumn("Marcos", 30, "1001");
marcos.greetings();

let jose = new Person("José", 30);
jose.greetings();