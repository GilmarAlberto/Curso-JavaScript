/*
Exercício 2: Soma dos Números Crie um programa que utilize um loop do while para calcular a soma dos números de 1 a 10 e, em seguida, exiba o resultado.
*/
let soma = 0, num = 1;

do {

    soma+=num;
    num++;

} while (num<=10)

console.log(`A soma de 1 a 10 é ${soma}`)