/*
Exercício 5: Adivinhar Número Crie um programa que gera um número aleatório entre 1 e 100. Em seguida, peça ao usuário para adivinhar o número. Utilize um loop do while para continuar pedindo palpites até que o usuário acerte. A cada tentativa, informe se o número é maior ou menor do que o palpite do usuário.
*/

// Importa o módulo `readline`
const readline = require("readline");

// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Variáveis para armazenar o palpite do usuário e o número de tentativas
let tentativas = 0;

// Função para solicitar o palpite do usuário de forma assíncrona
async function obterPalpite() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Qual é o seu palpite? ", (palpite) => {
      rl.close();
      resolve(parseInt(palpite));
    });
  });
}

// Função principal assíncrona para o jogo
async function jogarJogo() {
  let palpite;
  do {
    palpite = await obterPalpite();
    tentativas++;

    if (palpite < numeroSecreto) {
      console.log("O número é maior.");
    } else if (palpite > numeroSecreto){
      console.log("O número é menor.");
    }
  } while (palpite !== numeroSecreto);

  console.log(`Acertou! O número secreto era ${numeroSecreto}. Você precisou de ${tentativas} tentativas.`);
}

// Inicia o jogo chamando a função principal
jogarJogo();
