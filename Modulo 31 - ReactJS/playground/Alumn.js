const Person = require('./Person');

class Alumn extends Person {

    constructor(name, age, turma) {
        super(name, age);
        this.turma = turma;
    }

    greetings() {
        console.log("Olá, tudo bom? Meu nome é", this.name, "e eu estou na turma", this.turma);
    }
}

module.exports = Alumn;