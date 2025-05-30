// Exercício 17
// Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário tente adivinhá-lo com dicas.

import * as readline from 'readline';

export function ex17() {
  console.log("Exercício 17 - Jogo de Adivinhação");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numeroSecreto = Math.floor(Math.random() * 100) + 1;

  function perguntar() {
    rl.question("Tente adivinhar o número entre 1 e 100: ", (resposta: string) => {
      const palpite = parseInt(resposta);

      if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, insira um número válido entre 1 e 100.");
        perguntar();
        return;
      }

      if (palpite < numeroSecreto) {
        console.log("Maior...");
        perguntar();
      } else if (palpite > numeroSecreto) {
        console.log("Menor...");
        perguntar();
      } else {
        console.log("Parabéns! Você acertou!");
        rl.close();
      }
    });
  }

  perguntar();
}
