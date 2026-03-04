class Lista<T> {
  private idx: number;
  private lista: (T | undefined)[];
  private tamanho: number;

  public constructor(tamanho: number) {
    this.tamanho = tamanho;
    this.lista = new Array<T>(this.tamanho);
    this.idx = 0;
  }

  //tempos de complexidade: big O(1) -> tempo constante
  public isVazia(): boolean { return this.idx === 0; }
  public isCheia(): boolean { return this.idx === this.tamanho; }
  public sizeTotal(): number { return this.tamanho; }
  public sizeAtual(): number { return this.idx; }

  //complexidade: big O(1) -> tempo constante, exceto se aumentar capacidade
  public adicionarElemento(elemento: T): boolean {
    if(this.isCheia()) {
      this.aumentarCapacidade();
    }

    this.lista[this.idx] = elemento;
    this.idx++;

    return true;
  }

  //complexidade: big O(n) -> tempo linear, exceto se aumentar capacidade | big Omega(1) -> tempo constante
  public adicionarElementoPorPosicao(elemento: T, posicao: number): boolean {
    if(posicao < 0 || posicao > this.idx) {
      throw new Error('a posicao não está nos limites do array');
    }

    if(this.isCheia()) {
      this.aumentarCapacidade();
    }

    for(let i: number = this.idx; i > posicao; i--) {
      this.lista[i] = this.lista[i-1];
    }

    this.lista[posicao] = elemento;
    this.idx++;

    return true;
  }

  //complexidade: big O(n) -> tempo linear
  private aumentarCapacidade(): void {
    let novoTamanho = this.tamanho*2;
    let novaLista = new Array<T | undefined>(novoTamanho);

    for(let i: number = 0; i < this.idx; i++) {
      novaLista[i] = this.lista[i];
    }

    this.tamanho = novoTamanho
    this.lista = novaLista;
  }


  //complexidade: big O(n) -> tempo linear | big Omega(1) -> tempo constante
  public removerElemento(posicao: number): boolean {
    if(this.isVazia() || posicao < 0 || posicao >= this.idx) {
      throw new Error('impossivel remover. o idx não está nos limites do array');
    }

    for(let i: number = posicao; i < this.idx-1; i++) {
      this.lista[i] = this.lista[i+1];
    }

    this.lista[this.idx-1] = undefined;
    this.idx--;

    return true;
  }

  //complexidade: big O(n) -> tempo linear | big Omega(1) -> tempo constante
  public buscarElemento(elemento: T): number {
    if (this.isVazia()) {
      return -1;
    }

    for (let i = 0; i < this.idx; i++) {
      if (this.lista[i] === elemento) {
        return i;
      }
    }

    return -1;
  }

  //complexidade: big O(n) -> tempo linear
  public zerarLista(): void {
    for(let i: number = 0; i < this.idx; i++) {
      this.lista[i] = undefined;
    }

    this.idx = 0;
  }

  //complexidade: big O(n) -> tempo linear | big Omega(1) -> tempo constante
  public toString(): string {
    let str = '[';
    
    for(let i: number = 0; i < this.idx; i++) {
      str += this.lista[i];

      if(i < this.idx-1) str += ', ';  
    }
    str += ']';

    return str;
  }

  //complexidade: big O(1) -> tempo constante
  public getElemento(posicao: number): T {
    if (posicao < 0 || posicao >= this.idx) {
      throw new Error("posição inválida");
    }

    return this.lista[posicao] as T;
  }
}

//chat e deepseek: 8.5 | gemini: 9.5