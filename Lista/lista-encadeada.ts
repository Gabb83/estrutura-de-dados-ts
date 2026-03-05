class ListaEncadeada<T> {
  private head: No<T> | null;
  private tamanho: number

  constructor() {
    this.head = null;
    this.tamanho = 0;
  }

  /* cria-se um novo no recebendo seu valor; o novo nó passa a apontar para o atual head;
  o head é atualizado para o novo nó; incrementa o tamanho da lista */
  public inserirInicio(elemento: T): void {
    const novoNo: No<T> = new No(elemento);
    
    novoNo.prox = this.head;
    this.head = novoNo;
    
    this.tamanho++;
  }

  /* cria-se um novo nó e verifica se há algum elemento na lista; percorre a lista até o último
  elemento; o último nó passa a apontar para o novo nó; incrementa tamanho */
  public inserirFinal(elemento: T): void {
    const novoNo = new No(elemento);

    if (this.head === null) {
      this.head = novoNo;
    } else {
      let atual = this.head;

      while (atual.prox !== null) {
        atual = atual.prox;
      }

      atual.prox = novoNo;
    }

    this.tamanho++;
  }

  public inserirPorPosicao(elemento: T, posicao: number): boolean {
    if(posicao < 0 || posicao > this.tamanho) {
      throw new Error("posição desejado está fora dos limites da lista");
    }

    if(posicao === 0) {
      this.inserirInicio(elemento);
      return true;
    }
    
    const novoNo = new No(elemento);
    let atual = this.head; 
    let idx = 0

    while(idx < posicao-1) {
      atual = atual!.prox;
      idx++;
    }

    novoNo.prox = atual!.prox;
    atual!.prox = novoNo;
    this.tamanho++;

    return true;
  }
}

class No<T> {
  public valor: T;
  public prox: No<T> | null;

  constructor(valor: T) {
    this.valor = valor;
    this.prox = null; 
  }
}
