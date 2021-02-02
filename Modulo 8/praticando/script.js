function media (nota1, nota2) {
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

media(10,8);

function mediaUlbra (g1, g2) {
    var mediaUlbra = (g1 + (g2 * 2)) / 3
    console.log(mediaUlbra);
}

mediaUlbra(7,6);

function faltaG2 (g1) {
    var total = 18;
    var falta = 0;
    falta = (total - g1) / 2;
    console.log("Precisa ir com nota " + falta);
}

faltaG2(6.5);