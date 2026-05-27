let numeros = [];

for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(valor);
}

let buscar = parseInt(prompt("Digite um número para procurar:"));

let quantidade = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscar) {
        quantidade++;
    }
}

alert(`O número ${buscar} aparece ${quantidade} vez(es).`);