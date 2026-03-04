# Lista Sequencial ou por Array

A lista é uma estrutura de dados linear, onde os dados eles são armazenados de forma contínua na memória, ou seja, um após o outro, não podendo haver espaços vazios entre eles. Cada elemento possui um índice, que é a posição do elemento na lista, funcionando como um identificador único.

Na lista sequencial a alocação de memória é feita de forma estática. Isso significa que o tamanho da lista é definido no momento da criação e não pode ser alterado durante a execução do programa. Se a lista atingir sua capacidade máxima, não será possível adicionar novos elementos sem criar uma nova lista com um tamanho maior.
---

## Vantagens da Lista Sequencial
- Acesso rápido aos elementos: O acesso a um elemento específico é eficiente, pois os elementos estão armazenados de forma contígua na memória, permitindo acesso direto por meio do índice.
- Simplicidade: A implementação de uma lista sequencial é relativamente simples, tornando-a fácil de entender
- Menor overhead de memória: Como os elementos estão armazenados de forma contígua, não há necessidade de armazenar ponteiros adicionais para cada elemento, o que pode economizar memória em comparação com outras estruturas de dados.
---

## Desvantagens da Lista Sequencial
- Tamanho fixo: O tamanho da lista é definido no momento da criação.
- Inserção e remoção de elementos: A inserção e remoção de elementos em uma lista sequencial pode ser ineficiente, especialmente se for necessário realocar os elementos para manter a contiguidade.
- Desperdício de memória: Se a lista for criada com um tamanho maior do que o necessário.
---

## Modus Operandi
- método adicionar: ao inserir um elemento por índice que não seja o último, os elementos a partir desse índice precisam ser deslocados para a direita para abrir espaço para o novo elemento. O que resulta em um custo de O(n) = tempo linear.
- método remover: ao remover um elemento por índice, os elementos a partir desse índice precisam ser deslocados para a esquerda para preencher o espaço vazio deixado pelo elemento deletado. O que resulta em um custo de O(n) = tempo linear.
- método acessar ou atualizar: ao acessar um elemento por índice, o acesso é direto, pois os elementos estão armazenados de forma contígua na memória. O que resulta em um custo de O(1) = tempo constante.
- método buscar: ao buscar um elemento por valor, é necessário percorrer a lista sequencialmente até encontrar o elemento desejado ou chegar ao final da lista. O que resulta em um custo de O(n) = tempo linear.
- método imprimir: ao imprimir os elementos da lista, é necessário percorrer a lista sequencialmente para acessar cada elemento e exibi-lo. O que resulta em um custo de O(n) = tempo linear.
---