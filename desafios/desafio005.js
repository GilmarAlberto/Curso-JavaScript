/*
Declare uma variável chamada "idade" e atribua a ela sua idade atual. Em seguida, imprima o valor da variável "idade" no console.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero: ', function(num) {
    num=parseInt(num);
    console.log(`Você digitou o número ${num}.`);
    console.log(`O seu antecessor é ${num-1}`);
    console.log(`O seu sucessor é ${num+1}`)
    rl.close();
});