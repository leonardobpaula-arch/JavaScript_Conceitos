const entrada = require('readline-sync');

const operadores = [];

for(let operador = 0; operador < 5; operador++){
    const nome = entrada.question(`Digite o nome do operador ${operador + 1}: `);
    operadores.push(nome);
}