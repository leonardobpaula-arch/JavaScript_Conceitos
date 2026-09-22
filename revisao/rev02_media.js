const entrada = require('readline-sync');

let total = 0;

for (let inspecao = 1; inspecao <= 6; inspecao++){
    const valor = entrada.questionFloat(`Digite a medida da ${inspecao}: `);
    total += valor;
}

const media = total / 6;

console.log(`Total de defeitos: ${total}`);
console.log(`Media de defeitos: ${media}`);