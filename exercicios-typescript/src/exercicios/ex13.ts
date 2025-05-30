// Exercício 13
// Escreva um programa que defina uma interface Veiculo com métodos acelerar() e frear(), e implemente essa interface em uma classe Carro.

// Interface que define um contrato: todo Veiculo deve ter os métodos acelerar e frear
interface Veiculo {
  acelerar(): void;
  frear(): void;
}

// Classe Carro que implementa a interface Veiculo
class Carro implements Veiculo {
  modelo: string;
  velocidade: number;

  constructor(modelo: string) {
    this.modelo = modelo;
    this.velocidade = 0; // Velocidade inicial é 0
  }

  // Implementação do método acelerar
  acelerar(): void {
    this.velocidade += 10;
    console.log(`${this.modelo} acelerou. Velocidade atual: ${this.velocidade} km/h`);
  }

  // Implementação do método frear
  frear(): void {
    this.velocidade = Math.max(0, this.velocidade - 10);
    console.log(`${this.modelo} freou. Velocidade atual: ${this.velocidade} km/h`);
  }
}

// Exporta a função ex13 que será chamada no menu
export function ex13() {
  console.log("Exercício 13 - Interface Veiculo com classe Carro");

  const carro = new Carro("Fusca");

  carro.acelerar(); // Acelera 1 vez
  carro.acelerar(); // Acelera novamente
  carro.frear();    // Freia

  console.log("Operações concluídas com o veículo.");
}
