// Exercício 14
// Escreva um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10.

// Importa o módulo readline para entrada de dados
import * as readline from 'readline';

// Exporta a função ex14 que será chamada no menu principal
export function ex14() {
  console.log("Exercício 14 - Tabuada de um número");

  // Cria a interface de leitura do terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Pergunta ao usuário o número da tabuada
  rl.question("Digite um número inteiro para ver sua tabuada: ", (entrada: string) => {
    const numero = parseInt(entrada);

    // Verifica se a entrada é válida
    if (isNaN(numero)) {
      console.log("Valor inválido. Digite um número inteiro.");
    } else {
      console.log(`\nTabuada do ${numero}:`);
      // Loop de 1 a 10 para montar a tabuada
      for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
      }
    }

    rl.close(); // Finaliza a leitura
  });
}
