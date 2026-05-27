let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(valor);
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

alert("A soma dos números pares é: " + somaPares);