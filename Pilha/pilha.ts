class Pilha<T> {
  private pilha: (T | undefined)[];
  private topo: number
  private capacidade: number;

  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.topo = -1;
    this.pilha = new Array<T>(capacidade);
  }

  //Big O(n) quando chamado método de aumentar capacidade, mas em geral Big O(1)
  public push(valor: T): boolean {
    if(this.isCheia()) {
      this.aumentarCapacidade();
    }

    this.pilha[++this.topo] = valor;
    return true;
  }

  //Big O(n)
  private aumentarCapacidade(): void {
    const novaCapacidade = this.capacidade * 2;
    let novaPilha = new Array<T | undefined>(novaCapacidade);

    for(let i: number = 0; i <= this.topo; i++) {
      novaPilha[i] = this.pilha[i];
    }

    this.capacidade = novaCapacidade;
    this.pilha = novaPilha;
  }

  //Big O(1)
  public pop(): T {
    if(this.isVazia()) {
      throw new Error('impossível remover, pilha está vazia');
    }

    const valor = this.pilha[this.topo] as T;
    this.pilha[this.topo] = undefined;
    this.topo--;

    return valor;
  }

  //Big O(1)
  public peek(): T {
    if(this.isVazia()) {
      throw new Error('a pilha está vazia');
    }

    return this.pilha[this.topo] as T;
  }

  //Big O(n) | Big Omega(1)
  public toString(): string {
    let str = '[';
    
    for(let i: number = 0; i <= this.topo; i++) {
      str += this.pilha[i];
      if(i < this.topo) str += ', ';
    }
    str += ']';

    return str;
  }

  //metodos big O(1)
  public isVazia(): boolean { return this.topo === -1; }
  public isCheia(): boolean { return this.topo === this.capacidade-1; }
  public getCapacidadeUsada(): number { return this.topo+1; }
  public getCapacidadeTotal(): number { return this.capacidade; }
  public getIdxTopo(): number { return this.topo; }
}

let pilha = new Pilha<number>(3);
pilha.push(10);
pilha.push(20);
pilha.push(30);
console.log(pilha.peek());
console.log(pilha.toString());