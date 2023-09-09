/*
Exercício 3: Fatorial Elabore um programa que empregue um loop while para calcular o fatorial de um número dado pelo usuário. O fatorial de um número N é o produto de todos os inteiros positivos menores ou iguais a N.

*/

let num = 0, fat = 1, i = 1;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero: ', function(num) {
    
    if(parseInt(num) < 0){
        console.log("O fatorial de um numero negativo nao e definido.\n");

    } else if(parseInt(num)===0){
        console.log(`O fatorial de zero é 1!`)
    }
    else{

        while (i <= num) {
            fat *= i; // Multiplica 'fat' pelo valor de 'i' a cada iteração.
            i++;
        }
        console.log("O fatorial de %d eh %d\n", num, fat);
        /*console.log(`O fatorial de ${num} é ${fat}`)*/

    }
    rl.close();
});
