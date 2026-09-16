const entrada = require('readline-sync');

const temperatura = entrada.questionFloat("Digite a temperatura: ");

let situacao;

if (temperatura <= 60) {
    situacao = "NORMAL";
}else if (temperatura <= 80) {
    situacao = "ATENCAO";
}else {;
    situacao = "CRITICA";
};

console.log(`Temperatura: ${temperatura}°C`);