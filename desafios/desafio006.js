/*
Exercício de Verificação de Número Positivo ou Negativo:
Peça ao usuário para inserir um número e, em seguida, use uma declaração if para verificar se o número é positivo, negativo ou zero.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero: ', function(num) {
    if(parseInt(num)===0){
        console.log(`O número é zero!`)
    }
    else if(parseInt(num)%2 === 0){
        console.log(`O número ${num} é par!`);
    }
    else{
        console.log(`O número ${num} é impar!`);
    }
    rl.close();
});