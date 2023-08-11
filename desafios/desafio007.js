/*
Exercício de Avaliação de Notas: Peça ao usuário para inserir uma nota de 0 a 100. Use uma declaração if ou switch para avaliar e exibir o conceito associado a essa nota (A, B, C, etc.).

A (90-100): Excelente
B (80-89): Bom
C (70-79): Regular
D (60-69): Precisa melhorar
F (0-59): Fraco / Reprovado


*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma nota: ', function(nota) {
    nota = parseInt(nota);

    if(nota < 60){
        conceito = 'F';
    }
    else if(nota < 70){
        conceito = 'D';
    }
    else if(nota < 80){
        conceito = 'C';
    }
    else if(nota < 90){
        conceito = 'B';
    }
    else{
        conceito = 'A';
    }

    console.log(`Conceito: ${conceito}`);

    rl.close();
});