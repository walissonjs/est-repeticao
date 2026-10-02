// ATIVIDADE - ESTRUTURA DE REPETIÇÃO
// 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.

function somaImpares() {
// RESOLUÇÃO PROFESSOR CARLOS:
// let soma = 0;
//    for (let i = 1; i <= 500; i++) {
//        if (i % 2 !== 0 && i % 3 === 0) {
//            soma += i;
//        }
//    }
//    alert("A soma dos ímpares e múltiplos de 3 no conjunto de 1 à 500 é: " + soma);

// OUTRA FORMA (MAIS SIMPLES)
let soma = 0;
    
for (let i = 3; i <= 500; i += 6) {
    soma += i; // acumula
}
alert(`A soma dos números ímpares e multiplos de 3 é:\n-----------------------------------------------------\n • Soma total: ${soma}`);


// ======= Regra aritmética: an = a1 +(n−1) * r
// an = último termo
// a1 = primeiro termo
// n = índice = n = (an-a1)/r + 1 (encontrar o índice)
// r = razão da progressão aritmética:
// Início 3, último: 500, razão 6. 
// Começa em 3 e vai pulando de 6 em 6

// Progressão aritmética: primeiro termo = 3, razão = 6, último termo <= 500
// const primeiro = 3;
// const razao = 6;
// const ultimo = 3 + Math.floor((500 - 3) / razao) * razao;
// const n = ((ultimo - primeiro) / razao) + 1;

// Soma = n/2 * (primeiro + ultimo)
// const soma = n / 2 * (primeiro + ultimo);

// console.log(`A soma dos ímpares múltiplos de 3 de 1 a 500 é: ${soma}`);
}

// 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
//  a) A menor altura do grupo;
//  b) A maior altura do grupo;

function menorEMaiorAltura() {
    const quantidadeAlturas = 15;
    let alturas = [1.80, 1.75, 1.50, 1, 2.10, 1.85, 1.65, 1.50, 3, 1.20, 1.30, 1.45, 1.38, 1.95, 1.39];
    let menor = alturas[0];
    let maior = alturas[0];
    
    for (let altura of alturas) {
        if (altura < menor) {
            menor = altura;
        }

        if (altura > maior) {
            maior = altura;
        }
    }
    alert(`
        A quantidade de alturas percorridas é: ${quantidadeAlturas}
        A maior altura é: ${maior} & 
        A menor altura é: ${menor} !
    `);
}

// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.

function mediaAritmetica() {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidadeValores = 0;
    let valor = 10;

    while (valor > -8) {
        soma += valor;
        quantidadeValores++

        if (valor > 0) {
            positivos++
        } else {
            negativos++
        }
        valor -= 1; 
    }

    const media = soma / quantidadeValores;
    const percentualPositivos = (positivos * 100) / quantidadeValores;
    const percentualNegativos = negativos / quantidadeValores * 100;

    alert(`
            quantidade: ${quantidadeValores}
            positivos: ${positivos}
            negativos: ${negativos}
            soma: ${soma}
            percentualPositivos: ${percentualPositivos.toFixed(2)} %
            percentualNegativos: ${percentualNegativos.toFixed(2)} %
        `);
}

// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.

function quantidadeNosIntervalos() {}


// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será zero.

function algoritmoEstruturado() {
    let valores = {
        primeiro : 3,
        segundo: 5,
        terceiro: 9,
        quarto: 6,
        quinto: 10,
        encerramento: 0
    }
    let pares = 0;
    let impares = 0;
    let somaPares = 0;
    let somaImpares = 0;
    let quantidade = 0;
    let soma = 0;
    let mediaPares = 0;
    let mediaGeral = 0;

    for (chave in valores) {
        const valor = valores[chave];
        if (valor === 0) {
            break;
        }
        quantidade++
        soma += valor
        if (valor % 2 == 0) {
            pares++
            somaPares++
        } else {
            impares++
        }
        mediaPares = somaPares / pares;
        mediaGeral = soma / quantidade;
    }
    console.log(`Quantidade de pares: ${pares}`);
    console.log(`Quantidade de ímpares: ${impares}`);
    console.log(`Média dos pares: ${mediaPares}`);
    console.log(`Média geral: ${mediaGeral}`);
}

// 6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.





// 7) Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N.
//  Mostre a tabuada na forma: 
//          0 x N = 0
//          1 x N = 1N
//          2 x N = 2N
//     ... 10 x N = 10N


// 8) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.A. contendo 10 valores.




// 9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.G. contendo 10 valores.



// 10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de A! e o seu resultado. 
//     Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120.