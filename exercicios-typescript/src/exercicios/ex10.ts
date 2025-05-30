// Exercício 10
// Escreva um programa que ordene um array de números em ordem crescente.

// Importa o módulo readline para entrada de dados
import * as readline from 'readline';

// Exporta a função ex10 que será usada no menu principal
export function ex10() {
  console.log("Exercício 10 - Ordenar 5 números em ordem crescente");

  // Cria a interface para leitura do terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numeros: number[] = [];
  let contador = 0;

  // Função recursiva para perguntar os números
  function perguntarNumero() {
    rl.question(`Digite o número ${contador + 1}: `, (entrada: string) => {
      const numero = parseFloat(entrada);

      if (isNaN(numero)) {
        console.log("Entrada inválida. Digite um número.");
        perguntarNumero(); // Repete a pergunta
      } else {
        numeros.push(numero);
        contador++;

        if (contador < 5) {
          perguntarNumero(); // Continua pedindo até chegar em 5
        } else {
          // Ordena o array com função de comparação numérica
          const ordenado = numeros.sort((a, b) => a - b);

          // Mostra os números ordenados
          console.log("Números em ordem crescente:");
          console.log(ordenado.join(", "));

          rl.close(); // Encerra a leitura
        }
      }
    });
  }

  // Inicia a leitura
  perguntarNumero();
}
