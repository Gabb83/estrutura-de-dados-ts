# Pilha por Array (Stack)

A pilha é uma estrutura de dados linear que segue o `princípio LIFO (Last In, First Out)`. Isso significa que o último elemento adicionado à pilha será o primeiro a ser removido. Na construção da pilha vazia o index do topo é definido como -1, indicando que a pilha está vazia. A pilha é implementada usando um array, onde o topo da pilha é representado por um índice que aponta para o último elemento adicionado.

## Operações Básicas
- Push(): responsável por adicionar um novo elemento ao topo da pilha.
- Pop(): responsável por remover um elemento do topo da pilha e retorná-lo.
- Peek(): responsável por retornar o elemento está no topo da pilha sem removê-lo.

## Vantagens
- Simplicidade: A pilha é uma estrutura de dados de fácil implementação.
- Eficiência: As operações de push, pop e peek são realizadas em tempo constante ou Big O(1).
- Utilidade: A pilha é amplamente utilizada em algoritmos de recursão, avaliação de expressões e gerenciamento de memória.
- Usados em: exibição de histórico de navegação, desfazer ações em softwares de edição, em chamadas recursivas.

## Desvantagens
- Acesso limitado: A pilha só permite acesso ao elemento no topo.
- Tamanho fixo: Em algumas implementações, a pilha pode ter um tamanho fixo, o que pode levar a problemas de estouro da pilha (stack overflow).
- Ordenação e Busca: Não adequada para busca ou ordenação, pois não permite acesso aleatório aos elementos.