/*
Exercício de Calculadora Simples: Crie uma calculadora que peça ao usuário para inserir dois números e uma operação (+, -, *, /). Use uma declaração switch para executar a operação selecionada.

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', function(n1) {
    rl.question('Digite o segundo número: ', function(n2){
        rl.question('Digite a operação (+, -, *, /): ', function(op){

            n1 = parseInt(n1);
            n2 = parseInt(n2);

            switch(op){
               case '+':
                res = n1 + n2;
                break;
               case '-':
                res = n1 - n2;
                break;
               case '*': 
                res = n1 * n2;
                break;
               case '/':
                res = n1 / n2;
                break;
               default:
                console.log(`Operação inválida!`);
                rl.close();
                return;
            }
            
            console.log(`Resultado: ${n1} ${op} ${n2} = ${res}`);
            rl.close();
        });
    });
});