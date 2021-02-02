
/*
var aluno = {
    nome : "Igor",
    notas : [7.5, 5.0]
}

var novaProp = "LastName";

aluno.matricula = 12345

aluno[novaProp] = "Oliveira";

aluno["sobrenome"] = "Oliveira";

console.log(aluno); 

var aluno = new Object();

aluno.nome = "Igor";

aluno.notas = [8, 9];

console.log(aluno);

*/





/* function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome : "Igor",
    notas : [7, 8],
    
    media: calcMedia    
}

var aluno1 = {
    nome : "João",
    notas : [6, 8],
    
    media: calcMedia 
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());

*/


// function criarAluno(nome, n1, n2) {

//     var aluno = {
//         nome : nome,
//         nota1 : n1,
//         nota2 : n2,
//         media : function() {
//             return (this.nota1 + this.nota2) / 2;

//         }
//     }

//     return aluno;
// }


function aluno(nome, n1,  n2) {
    
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function() {
        return (this.nota1 + this.nota2 ) / 2;
    }
}

// var turma = [ 
    
//     criarAluno("Igor", 9, 6),
//     criarAluno("Joao", 7, 4),
//     criarAluno("Marcela", 8, 7.5)
// ]

var a = new aluno("Igor", 8, 7);
var b = new aluno("João", 6, 7);

console.log(a);
console.log(b);


// var aluno = turma[2]; 

// console.log(aluno);
// console.log(aluno.media());

// turma.forEach(function(elemento) {

//     console.log(elemento);
// });

// ou 

// for  (var aluno of turma ) {
//     console.log(aluno.nome + " - " + aluno.media())
// }