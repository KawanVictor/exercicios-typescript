// Exercício 05
// Escreva um programa que exiba apenas os números pares de 1 a 20.

// Exporta a função ex05 que será chamada no menu
export function ex05() {
  console.log("Exercício 05 - Números pares de 1 a 20");

  // Laço de repetição de 1 até 20
  for (let i = 1; i <= 20; i++) {
    // Verifica se o número atual é par
    if (i % 2 === 0) {
      // Se for par, exibe no console
      console.log(i);
    }
  }

  // Mensagem final opcional
  console.log("Fim da listagem.");
}
