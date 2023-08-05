/*
Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de 
boas-vindas.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', function(nome) {
  console.log("Olá, " + nome + "! Bem-vindo ao Node.js!");
  rl.close();
});