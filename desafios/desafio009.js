/*
Exercício de Escolha de Lanche: Crie um programa que apresente opções de lanches ao usuário e permita que ele escolha. Use uma declaração switch para mostrar a mensagem correspondente ao lanche escolhido.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
rl.question('Escolha um lanche (1 - Hambúrguer, 2 - Pizza, 3 - Sanduíche, 4 - Salada): ', function(opcao) {
    opcao = parseInt(opcao);
  
    let mensagem;
  
    switch (opcao) {
        case 1:
            mensagem = 'Você escolheu Hambúrguer!';
            break;
        case 2:
            mensagem = 'Você escolheu Pizza!';
            break;
        case 3:
            mensagem = 'Você escolheu Sanduíche!';
            break;
        case 4:
            mensagem = 'Você escolheu Salada!';
            break;
        default:
            mensagem = 'Opção inválida!';
            break;
    }
  
    console.log(mensagem);
    rl.close();
});
  