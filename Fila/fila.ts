class Fila<T> {
  private fila: (T | undefined)[];
  private idx: number;
  private capacidade: number;
  private inicio: number;
  private final: number;

  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.fila = new Array<T>(capacidade);
    this.idx = 0;
    this.inicio = 0;
    this.final = 0;
  }

  //adicionar | big O(1) -> tempo constante;
  public enqueue(valor: T): void {
    if(this.isCheia()) {
      throw new Error('fila cheia. impossível adicionar mais');
    }

    this.fila[this.final] = valor;
    this.final = (this.final+1) % this.capacidade;

    this.idx++;
  }

  //remover | big O(1) -> tempo constante;
  public dequeue(): T {
    if(this.isVazia()) {
      throw new Error('fila vazia. impossível remover');
    }

    const valorRemovido = this.fila[this.inicio];
    this.fila[this.inicio] = undefined;

    this.inicio = (this.inicio+1) % this.capacidade;
    this.idx--;

    return valorRemovido as T;
  }

  //retonar primeiro elemento | big O(1) -> tempo constante;
  public peek(): T {
    if (this.isVazia()) {
      throw new Error('fila vazia');
    }
      
    return this.fila[this.inicio] as T;
  }

  //imprimir | big O(n) -> tempo linear
  public toString(): string {
    let str = '[';

    for (let i = 0; i < this.idx; i++) {
      const indiceReal = (this.inicio + i) % this.capacidade;
      str += this.fila[indiceReal];

      if (i < this.idx - 1) str += ', ';
    }

    str += ']';
    return str;
  }

  //métodos de verificação simples | big O(1)
  public isVazia(): boolean { return this.idx === 0; }
  public isCheia(): boolean { return this.idx === this.capacidade; }
  public getSizeTotal(): number { return this.capacidade; }
  public getSizeUsado(): number { return this.idx; }
}

let fila = new Fila<string>(3); //inicializa a fila instanciando como um novo objeto da Fila de tipo string

//adiciona na fila 
fila.enqueue("João");
fila.enqueue("Luis");
fila.enqueue("Gabriel");

fila.dequeue(); //João sai da fila

console.log(fila.toString()); //print [Luis, Gabriel]