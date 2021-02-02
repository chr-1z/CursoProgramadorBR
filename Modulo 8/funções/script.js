
// function media (n1, n2) {
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2) / 2;

//     return  media;
// }

// var resultado1 = media(6, 7);
// var resultado2 = media(8, 7);

// console.log(resultado1);
// console.log(resultado2);


 
// Função executada a partir de uma variável

// function saudacao() {
//     return "Olá Mundo!";
// }

// var s = saudacao;

// console.log(s());

var media = function (n1, n2) {
    return (n1 + n2) / 2;
}

console.log(media(5,6));

//ou

var media = (n1, n2) => {
    return (n1 + n2) / 2;
}

console.log(media(5,6));