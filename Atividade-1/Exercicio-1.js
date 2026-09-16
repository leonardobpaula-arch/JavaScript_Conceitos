const entrada = require('readline-sync');

const produto = entrada.question("Digite o produto: ");
const qtdPorHora = entrada.questionInt("Digite a quantidade produzida por hora: ");
const HorasTrabalhadas = entrada.questionInt("Digite as horas trabalhadas: ");

const total = qtdPorHora * HorasTrabalhadas;

console.log(`\n=== Relatorio de producao ===`);
console.log(`Produto: ${produto}`);
console.log(`producao por hora: ${qtdPorHora} por hora`);
console.log(`Horas trabalhadas:${HorasTrabalhadas} horas`);
console.log(`Total de pecas produzidas ${total}`);