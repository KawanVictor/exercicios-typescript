// Exercício 11
// Escreva um programa que defina uma classe Pessoa com atributos nome e idade, e métodos para exibir esses atributos.

// Importa o módulo readline para entrada de dados
import * as readline from 'readline';

// Define a classe Pessoa com dois atributos e um método
class Pessoa {
  nome: string;
  idade: number;

  // Construtor para inicializar a classe com nome e idade
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método que exibe os dados da pessoa
  exibirInformacoes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade} anos`);
  }
}

// Função principal chamada pelo menu
export function ex11() {
  console.log("Exercício 11 - Classe Pessoa");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Pergunta o nome
  rl.question("Digite o nome da pessoa: ", (nome: string) => {
    // Pergunta a idade
    rl.question("Digite a idade da pessoa: ", (idadeStr: string) => {
      const idade = parseInt(idadeStr);

      if (isNaN(idade)) {
        console.log("Idade inválida. Por favor, digite um número.");
      } else {
        // Cria um novo objeto Pessoa
        const pessoa = new Pessoa(nome, idade);

        // Chama o método para exibir os dados
        pessoa.exibirInformacoes();
      }

      rl.close();
    });
  });
}

