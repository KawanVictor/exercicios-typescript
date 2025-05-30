// Exercício 07
// Escreva um programa que encontre o maior número em um array de inteiros.

// Importa o módulo readline para entrada de dados no terminal
import * as readline from 'readline';

// Exporta a função ex07 que será usada no menu
export function ex07() {
  console.log("Exercício 07 - Encontrar o maior número entre 5 digitados");

  // Cria a interface de leitura
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numeros: number[] = []; // Array para armazenar os números
  let contador = 0;             // Controla quantos números já foram digitados

  // Função recursiva para ler os números
  function perguntarNumero() {
    rl.question(`Digite o número ${contador + 1}: `, (entrada: string) => {
      const numero = parseFloat(entrada);

      if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número válido.");
        perguntarNumero(); // Tenta novamente
      } else {
        numeros.push(numero);
        contador++;

        if (contador < 5) {
          perguntarNumero(); // Continua até digitar 5
        } else {
          // Usa Math.max com spread operator para encontrar o maior número
          const maior = Math.max(...numeros);

          console.log(`Os números digitados foram: ${numeros.join(", ")}`);
          console.log(`O maior número é: ${maior}`);
          rl.close(); // Finaliza a leitura
        }
      }
    });
  }

  // Inicia o processo de perguntas
  perguntarNumero();
}

