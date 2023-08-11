/*
Declare uma variável chamada "idade" e atribua a ela sua idade atual. Em seguida, imprima o valor da variável "idade" no console.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua idade: ', function(idade) {
    console.log(`Você digitou a idade ${idade}.`)
    rl.close();
});