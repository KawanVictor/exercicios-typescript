// Exercício 08
// Escreva um programa que conte o número de vogais em uma string fornecida pelo usuário.

// Importa o módulo readline para leitura de entrada do terminal
import * as readline from 'readline';

// Exporta a função ex08 que será chamada pelo menu
export function ex08() {
  console.log("Exercício 08 - Contar vogais em uma string");

  // Cria a interface para entrada de dados do usuário
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Pergunta ao usuário a frase ou palavra
  rl.question("Digite uma frase ou palavra: ", (texto: string) => {
    // Converte o texto para minúsculo para facilitar a verificação
    const minusculo = texto.toLowerCase();

    // Define quais são as vogais
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    let contador = 0;

    // Percorre cada caractere da string
    for (let letra of minusculo) {
      if (vogais.includes(letra)) {
        contador++; // Conta se for vogal
      }
    }

    // Exibe o resultado
    console.log(`A frase/palavra "${texto}" contém ${contador} vogal(is).`);

    rl.close(); // Encerra a leitura
  });
}
