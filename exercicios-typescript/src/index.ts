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

// Mapeamento das funções dos exercícios
const exercicios: { [key: string]: () => void } = {
  "1": ex01,
  "2": ex02,
  "3": ex03,
  "4": ex04,
  "5": ex05,
  "6": ex06,
  "7": ex07,
  "8": ex08,
  "9": ex09,
  "10": ex10,
  "11": ex11,
  "12": ex12,
  "13": ex13,
  "14": ex14,
  "15": ex15,
  "16": ex16,
  "17": ex17,
  "18": ex18,
};

// Função principal para exibir o menu
function exibirMenu(): void {
  console.log("\n===== MENU DE EXERCÍCIOS =====");
  for (let i = 1; i <= 18; i++) {
    console.log(`${i} - Exercício ${i.toString().padStart(2, '0')}`);
  }
  console.log("0 - Sair");

  rl.question("Escolha uma opção: ", (opcao: string) => {
    console.clear();
    if (opcao === "0") {
      rl.close();
    } else if (exercicios[opcao]) {
      exercicios[opcao]();
      voltarAoMenu();
    } else {
      console.log("Opção inválida!");
      voltarAoMenu();
    }
  });
}

// Espera o usuário pressionar Enter antes de voltar ao menu
function voltarAoMenu(): void {
  rl.question("\nPressione Enter para voltar ao menu...", () => {
    console.clear();
    exibirMenu();
  });
}

// Início do programa
exibirMenu();
