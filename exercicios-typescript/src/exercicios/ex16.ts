// Exercício 16
// Escreva um programa que valide uma senha de acordo com critérios: pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.

import * as readline from 'readline';

export function ex16() {
  console.log("Exercício 16 - Validador de Senha");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Digite uma senha para validar: ", (senha: string) => {
    const temTamanhoMinimo = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);

    if (temTamanhoMinimo && temMaiuscula && temMinuscula && temNumero) {
      console.log("Senha válida.");
    } else {
      console.log("Senha inválida. Requisitos:");
      console.log("- Mínimo de 8 caracteres");
      console.log("- Pelo menos uma letra maiúscula");
      console.log("- Pelo menos uma letra minúscula");
      console.log("- Pelo menos um número");
    }

    rl.close();
  });
}
