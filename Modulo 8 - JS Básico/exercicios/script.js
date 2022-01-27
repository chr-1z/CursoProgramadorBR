
// 1 - Escreva uma função que receba dois números e retorne o maior deles.

function maior(num1, num2) {
    if (num1 > num2){
        return num1;
    } else if (num2 > num1){
        return num2;
    } else {
        return "Os números são iguais!!"
    }
}

console.log("1 - Retorna o maior:", maior(6,5));

// 2 - Escreva uma função que receba um Array com 3 números e imprima eles em ordem.

function emOrdem(array) {
    let lista = [];
    let maior = -999999;

    for (var i = 0; i < array.length; i++){

        //console.log(array[i]);
    }
}

console.log("2 - Imprime os valores em ordem:", emOrdem([100,20,3000]))

// 3 - Escreva uma função que receba um Array com 5 números e retorne o maior deles.

function maior5(array) {
    let maior = -999999;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}

console.log("3 - Retorna o maior n° de um array com 5 n°s:", maior5([1,9,3,4,200]));

// 4 - Escreva uma função que receba um Array com 5 números e retorne a média deles.

function media5(array) {
    let num = 0;

    for (var i = 0; i < array.length; i++) {
        num += array[i];
    }

    return num/5;

}

console.log("4 - Retorna a média de um array com 5 n°s:", media5([1,44,1,1,1]));

// 5 - Escreva uma função que receba um número e imprima se ele é par ou ímpar.

function parOuImpar(numero) {
    if (numero% 2 == 0) {
        return "O número é Par!";
    } else {
        return "O número é Ímpar!";
    }
}

console.log("5 - Retorna se o n° é par ou ímpar:", parOuImpar(1));

// 6 - Escreva um programa que vá de 0 a 100 e 
//     imprima o número na tela caso não seja múltiplo de 4. 
//     Para cada número que seja múltiplo de 4 imprima "pi" no lugar.

function mult() {
    for (var i = 0; i < 100; i++) {
        if (i% 4 == 0) {
            console.log(Math.PI);
        } else {
            console.log(i);
        }
    }
}

//mult();

console.log("6 - Funcão esta comentada.")

// 7 - Escreva uma função que receba um objeto e imprima suas propriedades.

function obj(objeto) {
    return (objeto);
}

var aluno = {
    nome : "Igor",
    notas : [7.5, 5.0]
}

console.log("7 - Imprime as propriedades de um objeto:", obj(aluno));

// 8 - Escreva uma função que receba uma data e retorne um objeto com as 
//     propriedades dia, mês e ano Referentes a essa data.

function voltaData(dados) {
    console.log("Antes split:", dados);
    let guarda = [];
    guarda += dados.split("-");
    console.log("Depois do split:", guarda);

    var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    var data = {
        dia : dados[0],
        mes : dados[2]

    }

    return data;

}

console.log("", voltaData("05-15-1999"));
