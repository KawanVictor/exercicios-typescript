// Menu principal
import readline from 'readline';
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

function exibirMenu() {
  console.log("\n===== MENU DE EXERCÍCIOS =====");
  console.log("1 - Exercício 01");
  console.log("2 - Exercício 02");
  console.log("3 - Exercício 03");
  console.log("4 - Exercício 04");
  console.log("5 - Exercício 05");
  console.log("6 - Exercício 06");
  console.log("7 - Exercício 07");
  console.log("8 - Exercício 08");
  console.log("9 - Exercício 09");
  console.log("10 - Exercício 10");
  console.log("11 - Exercício 11");
  console.log("12 - Exercício 12");
  console.log("13 - Exercício 13");
  console.log("14 - Exercício 14");
  console.log("15 - Exercício 15");
  console.log("16 - Exercício 16");
  console.log("17 - Exercício 17");
  console.log("18 - Exercício 18");
  console.log("0 - Sair");
  rl.question("Escolha uma opção: ", (opcao) => {
    console.clear();
    switch (opcao) {
      case "1": ex01(); voltarAoMenu(); break;
      case "2": ex02(); voltarAoMenu(); break;
      case "3": ex03(); voltarAoMenu(); break;
      case "4": ex04(); voltarAoMenu(); break;
      case "5": ex05(); voltarAoMenu(); break;
      case "6": ex06(); voltarAoMenu(); break;
      case "7": ex07(); voltarAoMenu(); break;
      case "8": ex08(); voltarAoMenu(); break;
      case "9": ex09(); voltarAoMenu(); break;
      case "10": ex10(); voltarAoMenu(); break;
      case "11": ex11(); voltarAoMenu(); break;
      case "12": ex12(); voltarAoMenu(); break;
      case "13": ex13(); voltarAoMenu(); break;
      case "14": ex14(); voltarAoMenu(); break;
      case "15": ex15(); voltarAoMenu(); break;
      case "16": ex16(); voltarAoMenu(); break;
      case "17": ex17(); voltarAoMenu(); break;
      case "18": ex18(); voltarAoMenu(); break;
      case "0":
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        voltarAoMenu();
    }
  });
}

function voltarAoMenu() {
  rl.question("\nPressione Enter para voltar ao menu...", () => {
    console.clear();
    exibirMenu();
  });
}

exibirMenu();
