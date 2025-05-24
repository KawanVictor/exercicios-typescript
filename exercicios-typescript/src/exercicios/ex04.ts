// Exercício 04
// Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, utilizando a fórmula: F = (C × 9/5) + 32.

// Importa todas as funcionalidades do módulo 'readline'
import * as readline from 'readline';

// Exporta a função ex04 que será usada no menu principal
export function ex04() {
  console.log("Exercício 04 - Converter Celsius para Fahrenheit");

  // Cria a interface de leitura do terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Solicita ao usuário a temperatura em graus Celsius
  rl.question("Digite a temperatura em Celsius: ", (entrada: string) => {
    // Converte o valor digitado (string) para número decimal
    const celsius = parseFloat(entrada);

    // Verifica se o valor é um número válido
    if (isNaN(celsius)) {
      console.log("Valor inválido! Digite um número válido para a temperatura.");
    } else {
      // Aplica a fórmula de conversão para Fahrenheit
      const fahrenheit = (celsius * 9/5) + 32;

      // Exibe o resultado da conversão com uma casa decimal
      console.log(`${celsius.toFixed(1)}°C equivalem a ${fahrenheit.toFixed(1)}°F`);
    }

    // Fecha a interface de leitura
    rl.close();
  });
}

