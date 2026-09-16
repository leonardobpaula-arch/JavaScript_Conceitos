const entrada = require('readline-sync');

const pcsPorCiclo = entrada.questionInt("Digite o numero de pecas por ciclo: ");

let acumulado = 0;

for(let ciclo = 1;ciclo <=10; ciclo++) {
    acumulado += pcsPorCiclo;
    console.log(`Ciclo ${ciclo} - Producao acumulada: ${acumulado}`);
}