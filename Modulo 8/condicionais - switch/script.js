var nota1 = 8;
var nota2 = 8;

var media = (nota1 + nota2) / 2;

// if (media >= 7){
//     console.log("Você passou com média " + media );
// } else {
//     console.log("Sua nota " + media + " não foi suficiente para passar!");
// }

if (media >= 8) {
    
    conceito = "Ótimo";
} 
else if (media >= 6.5) {

    conceito  = "Bom";
}
else {

    conceito = "Regular";
}

conceito = "Mais ou menos";

console.log(media);
console.log(conceito);

switch(conceito) {
    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno!!");
        break;

    case "Bom":
        console.log("Você está quase perfeito!!");
        break;

    case "Regular":
        console.log("Estude mais um pouco!!");
        break;

    default:
        console.log("Houve algum erro!");
        break;
}