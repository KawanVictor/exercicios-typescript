// Exercício 02
// Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.

// Importa todas as funcionalidades do módulo 'readline' do Node.js
import * as readline from 'readline';

// Exporta a função ex02, que será chamada a partir do menu principal
export function ex02() {
  // Exibe no console o título do exercício
  console.log("Exercício 02 - Verifica se um número é par ou ímpar");

  // Cria a interface para ler a entrada do teclado
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Solicita que o usuário digite um número
  rl.question("Digite um número inteiro: ", (input: string) => {
    // Converte a entrada (que é string) para número inteiro
    const numero = parseInt(input);

    // Verifica se o número é par ou ímpar
    if (isNaN(numero)) {
      // Se o usuário não digitou um número válido
      console.log("Valor inválido! Por favor, digite um número inteiro.");
    } else if (numero % 2 === 0) {
      // Se o resto da divisão por 2 for zero, é par
      console.log(`O número ${numero} é PAR.`);
    } else {
      // Caso contrário, é ímpar
      console.log(`O número ${numero} é ÍMPAR.`);
    }

    // Encerra a interface de leitura
    rl.close();
  });
}

