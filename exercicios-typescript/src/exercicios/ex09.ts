// Exercício 09
// Criar uma calculadora simples de quatro operações (+ - * /).

// Importa o módulo readline para entrada de dados do terminal
import * as readline from 'readline';

// Exporta a função ex09 que será chamada no menu
export function ex09() {
  console.log("Exercício 09 - Calculadora Simples (+ - * /)");

  // Cria a interface para entrada e saída no terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Solicita o primeiro número
  rl.question("Digite o primeiro número: ", (n1Str: string) => {
    // Solicita o segundo número
    rl.question("Digite o segundo número: ", (n2Str: string) => {
      // Solicita a operação desejada
      rl.question("Escolha a operação (+, -, *, /): ", (operador: string) => {
        const n1 = parseFloat(n1Str);
        const n2 = parseFloat(n2Str);

        // Verifica se os números são válidos
        if (isNaN(n1) || isNaN(n2)) {
          console.log("Por favor, insira números válidos.");
          rl.close();
          return;
        }

        let resultado: number;

        // Seleciona a operação com base no operador
        switch (operador) {
          case "+":
            resultado = n1 + n2;
            break;
          case "-":
            resultado = n1 - n2;
            break;
          case "*":
            resultado = n1 * n2;
            break;
          case "/":
            if (n2 === 0) {
              console.log("Erro: divisão por zero.");
              rl.close();
              return;
            }
            resultado = n1 / n2;
            break;
          default:
            console.log("Operador inválido. Use +, -, * ou /.");
            rl.close();
            return;
        }

        // Exibe o resultado
        console.log(`Resultado: ${n1} ${operador} ${n2} = ${resultado}`);
        rl.close(); // Encerra a leitura
      });
    });
  });
}
