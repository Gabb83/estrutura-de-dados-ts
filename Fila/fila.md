# Fila por Array ou (Queue)

A fila é uma estrutura de dados linear e estática. Ela segue o `princípio FIFO (First In, First Out)`, ou seja, o primeiro elemento a entrar é o primeiro a sair. A fila é composta por dois ponteiros: início e final. O ponteiro `início` aponta para o primeiro elemento da fila, enquanto o ponteiro `final` aponta para o último elemento da fila. 

Exemplos de uso: fila de processos de um sistema, fila de requisições em um servidor, etc.

### Operações básicas
- `enqueue()`: Adiciona um elemento ao final da fila.
- `dequeue()`: Remove o elemento do início da fila.
- `peek()`: Retorna o elemento do início da fila sem removê-lo.

## Vantagens 
- Simplicidade: A implementação de uma fila é relativamente simples, especialmente quando usando um array.
- Acesso rápido: O acesso ao primeiro elemento da fila é rápido, pois está sempre no início do array.

## Desvantagens
- Tamanho fixo: A fila implementada com um array tem um tamanho fixo.