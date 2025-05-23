// Exercício 01
// Escreva um programa que receba dois números inteiros e exiba a soma deles.

// Importa o módulo 'readline' do Node.js para permitir a leitura de dados do usuário no terminal
import * as readline from 'readline';

// Função exportada chamada 'ex01', que será chamada pelo menu principal
export function ex01() {
  // Exibe o título do exercício no console
  console.log("Exercício 01 - Soma de dois números inteiros");

  // Cria uma interface de leitura (entrada e saída padrão do terminal)
  const rl = readline.createInterface({
    input: process.stdin,   // usa o teclado como entrada
    output: process.stdout  // exibe as mensagens no terminal
  });

  // Pergunta ao usuário o primeiro número
  rl.question("Digite o primeiro número: ", (input1: string) => {
    // Quando o usuário responder, esta função é chamada com a resposta (input1)

    // Pergunta ao usuário o segundo número
    rl.question("Digite o segundo número: ", (input2: string) => {
      // Quando o usuário responder, esta função é chamada com a resposta (input2)

      // Converte as duas entradas de texto (string) para números inteiros
      const num1 = parseInt(input1);
      const num2 = parseInt(input2);

      // Soma os dois números
      const soma = num1 + num2;

      // Exibe o resultado da soma no terminal
      console.log(`A soma é: ${soma}`);

      // Encerra a interface de leitura, encerrando as perguntas
      rl.close();
    });
  });
}
