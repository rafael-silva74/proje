let numeros = [];
let semDuplicados = [];
let repetidos = [];

for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(valor);
}

for (let i = 0; i < numeros.length; i++) {

    if (!semDuplicados.includes(numeros[i])) {
        semDuplicados.push(numeros[i]);
    }

    if (
        numeros.indexOf(numeros[i]) !== i &&
        !repetidos.includes(numeros[i])
    ) {
        repetidos.push(numeros[i]);
    }
}

alert("Vetor original: " + numeros);
alert("Números sem repetição: " + semDuplicados);
alert("Números repetidos: " + repetidos);