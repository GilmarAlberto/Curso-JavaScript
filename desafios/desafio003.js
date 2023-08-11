/*
Crie um programa que leia dois números e mostre a soma entre eles.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', function(num1) {
    rl.question('Digite o segundo número: ', function(num2){
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        console.log(`A soma entre ${num1} e ${num2} é ${num1+num2}`);

        rl.close();
    });
});