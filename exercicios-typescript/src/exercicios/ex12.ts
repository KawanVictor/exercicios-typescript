// Exercício 12
// Escreva um programa que use herança para criar uma classe Aluno que herda de Pessoa e adiciona um atributo matricula.

// Importa o módulo readline para entrada de dados
import * as readline from 'readline';

// Classe base: Pessoa
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirInformacoes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade} anos`);
  }
}

// Classe derivada: Aluno herda de Pessoa e adiciona 'matricula'
class Aluno extends Pessoa {
  matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    // Chama o construtor da classe Pessoa
    super(nome, idade);
    this.matricula = matricula;
  }

  // Sobrescreve ou expande o método da classe base
  exibirInformacoes() {
    super.exibirInformacoes(); // Chama método da classe Pessoa
    console.log(`Matrícula: ${this.matricula}`);
  }
}

// Função principal exportada para o menu
export function ex12() {
  console.log("Exercício 12 - Herança: Classe Aluno que herda de Pessoa");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Coleta nome, idade e matrícula do aluno
  rl.question("Digite o nome do aluno: ", (nome: string) => {
    rl.question("Digite a idade do aluno: ", (idadeStr: string) => {
      const idade = parseInt(idadeStr);

      if (isNaN(idade)) {
        console.log("Idade inválida. Por favor, digite um número.");
        rl.close();
        return;
      }

      rl.question("Digite a matrícula do aluno: ", (matricula: string) => {
        const aluno = new Aluno(nome, idade, matricula);
        aluno.exibirInformacoes();
        rl.close();
      });
    });
  });
}
