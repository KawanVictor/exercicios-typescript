// Exercício 15
// Implemente uma calculadora de Índice de Massa Corporal (IMC) que receba peso (kg) e altura (m) e exiba o resultado com a classificação correspondente.

// Importa o módulo readline para entrada de dados
import * as readline from 'readline';

// Exporta a função ex15 que será usada no menu principal
export function ex15() {
  console.log("Exercício 15 - Calculadora de IMC");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Pergunta o peso
  rl.question("Digite seu peso em kg: ", (pesoStr: string) => {
    rl.question("Digite sua altura em metros: ", (alturaStr: string) => {
      const peso = parseFloat(pesoStr);
      const altura = parseFloat(alturaStr);

      // Verifica se os dados são válidos
      if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Entrada inválida. Certifique-se de digitar números positivos.");
        rl.close();
        return;
      }

      // Calcula o IMC
      const imc = peso / (altura * altura);
      const imcFormatado = imc.toFixed(2);

      // Classificação do IMC com base no valor
      let classificacao = "";

      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc < 24.9) {
        classificacao = "Peso normal";
      } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
      } else if (imc < 34.9) {
        classificacao = "Obesidade grau I";
      } else if (imc < 39.9) {
        classificacao = "Obesidade grau II";
      } else {
        classificacao = "Obesidade grau III (mórbida)";
      }

      // Exibe o resultado
      console.log(`\nSeu IMC é: ${imcFormatado}`);
      console.log(`Classificação: ${classificacao}`);

      rl.close();
    });
  });
}
