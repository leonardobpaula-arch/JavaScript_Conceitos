const entrada = require('readline-sync');

const materiais = [];

for(let i = 0; i < 4; i++){
    const material = {
        nome: entrada.question(`Digite o nome do [i+1]o material: `),
        quantidade: entrada.questionInt("Digite a quantidade: "),
        estoqueMinimo: entrada.questionInt("Digite o estoque minimo: "),
    }
    materiais.push(material);
}
console.log("=== RELATORIO DE ESTOQUE ===");

for(let i = 0; i < materiais.length; i++){
    const material = materiais[i];

    let situacao;
    if (material.quantidade < material.estoqueMinimo){
        situacao = "ESTOQUE BAIXO";
    }else{
        situacao = "ESTOQUE OK";
    }
    console.log(`Material: ${material.nome}`);
    console.log(`Quantidade: ${material.quantidade}`);
    console.log(`Estoque minimo: ${material.estoqueMinimo}`);
    console.log(`situacao: ${situacao}`);
    console.log("-".repeat(20));
};