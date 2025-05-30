// Exercício 18
// Desenvolva um programa que conte quantas palavras existem em uma string fornecida pelo usuário.

import * as readline from 'readline';

export function ex18() {
  console.log("Exercício 18 - Contador de Palavras");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Digite uma frase: ", (frase: string) => {
    const palavras = frase.trim().split(/\s+/);
    const quantidade = palavras.filter(p => p.length > 0).length;

    console.log(`Quantidade de palavras: ${quantidade}`);

    rl.close();
  });
}
