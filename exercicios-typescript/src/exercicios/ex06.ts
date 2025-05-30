// Exercício 06
// Escreva um programa que leia 5 números do usuário e os armazene em um array, depois exiba todos os números.

// Importa o módulo readline para entrada de dados
import * as readline from 'readline';

// Exporta a função ex06 que será chamada pelo menu
export function ex06() {
  console.log("Exercício 06 - Ler 5 números e exibir todos");

  // Cria a interface de leitura no terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numeros: number[] = []; // Array para armazenar os números
  let contador = 0;             // Contador de quantos números já foram digitados

  // Função recursiva para pedir os números um por um
  function perguntarNumero() {
    rl.question(`Digite o número ${contador + 1}: `, (entrada: string) => {
      const numero = parseFloat(entrada); // Converte a entrada para número

      if (isNaN(numero)) {
        console.log("Valor inválido. Tente novamente.");
        perguntarNumero(); // Repete a pergunta se não for um número
      } else {
        numeros.push(numero); // Adiciona o número ao array
        contador++;

        if (contador < 5) {
          perguntarNumero(); // Continua perguntando até chegar em 5
        } else {
          console.log("Números digitados:");
          console.log(numeros); // Exibe todos os números armazenados
          rl.close();           // Encerra a leitura
        }
      }
    });
  }

  // Inicia a sequência de perguntas
  perguntarNumero();
}

