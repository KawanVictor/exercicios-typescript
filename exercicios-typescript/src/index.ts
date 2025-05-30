// Menu principal
import * as readline from 'readline';
import { ex01 } from './exercicios/ex01';
import { ex02 } from './exercicios/ex02';
import { ex03 } from './exercicios/ex03';
import { ex04 } from './exercicios/ex04';
import { ex05 } from './exercicios/ex05';
import { ex06 } from './exercicios/ex06';
import { ex07 } from './exercicios/ex07';
import { ex08 } from './exercicios/ex08';
import { ex09 } from './exercicios/ex09';
import { ex10 } from './exercicios/ex10';
import { ex11 } from './exercicios/ex11';
import { ex12 } from './exercicios/ex12';
import { ex13 } from './exercicios/ex13';
import { ex14 } from './exercicios/ex14';
import { ex15 } from './exercicios/ex15';
import { ex16 } from './exercicios/ex16';
import { ex17 } from './exercicios/ex17';
import { ex18 } from './exercicios/ex18';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Nomes dos exercícios
const nomesExercicios: string[] = [
  "Soma de dois números",
  "Par ou ímpar",
  "Média de três notas",
  "Celsius para Fahrenheit",
  "Números pares de 1 a 20",
  "Ler e exibir 5 números",
  "Maior número do array",
  "Contar vogais",
  "Calculadora básica",
  "Ordenar array",
  "Classe Pessoa",
  "Herança: Pessoa → Aluno",
  "Interface Veículo/Classe Carro",
  "Tabuada de um número",
  "Calculadora de IMC",
  "Validador de senha",
  "Jogo de adivinhação",
  "Contador de palavras"
];

// Mapeamento dos exercícios
const exercicios: { [key: string]: () => void } = {
  "1": ex01,  "2": ex02,  "3": ex03,
  "4": ex04,  "5": ex05,  "6": ex06,
  "7": ex07,  "8": ex08,  "9": ex09,
  "10": ex10, "11": ex11, "12": ex12,
  "13": ex13, "14": ex14, "15": ex15,
  "16": ex16, "17": ex17, "18": ex18,
};

// Função para exibir o menu
function exibirMenu(): void {
  console.clear();
  console.log("\n===== MENU DE EXERCÍCIOS =====\n");

  nomesExercicios.forEach((nome, i) => {
    const numero = (i + 1).toString().padStart(2, '0');
    console.log(`${numero} - ${nome}`);
  });

  console.log("\n00 - Sair");

  rl.question("\nEscolha uma opção: ", (opcao: string) => {
    const opcaoLimpa = opcao.trim();

    console.clear();

    if (opcaoLimpa === "0" || opcaoLimpa === "00") {
      console.log("Encerrando o programa...");
      rl.close();
    } else if (exercicios[opcaoLimpa]) {
      exercicios[opcaoLimpa]();
      voltarAoMenu();
    } else {
      console.log("Opção inválida!");
      voltarAoMenu();
    }
  });
}

// Espera o usuário pressionar Enter para voltar ao menu
function voltarAoMenu(): void {
  rl.question("\n--- Fim do exercício ---\n\nPressione Enter para voltar ao menu...", () => {
    exibirMenu();
  });
}

// Início do programa
exibirMenu();
