// Exercício 03
// Escreva um programa que calcule a média de três notas fornecidas pelo usuário.

// Importa o módulo 'readline' para entrada de dados via terminal
import * as readline from 'readline';

// Exporta a função ex03, que será chamada pelo menu
export function ex03() {
  console.log("Exercício 03 - Calcular a média de três notas");

  // Cria a interface de leitura do terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Solicita a primeira nota
  rl.question("Digite a primeira nota: ", (nota1: string) => {
    // Solicita a segunda nota
    rl.question("Digite a segunda nota: ", (nota2: string) => {
      // Solicita a terceira nota
      rl.question("Digite a terceira nota: ", (nota3: string) => {
        // Converte as três notas de string para número
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);

        // Verifica se todas as entradas são válidas
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
          console.log("Por favor, digite apenas números válidos.");
        } else {
          // Calcula a média das três notas
          const media = (n1 + n2 + n3) / 3;

          // Exibe o resultado formatado com 2 casas decimais
          console.log(`A média das notas é: ${media.toFixed(2)}`);
        }

        // Encerra a leitura
        rl.close();
      });
    });
  });
}

