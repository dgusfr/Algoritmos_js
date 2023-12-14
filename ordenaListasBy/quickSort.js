const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

//algoritmo de ordenação QuickSort para ordenar um array de livros com base no preço
function quickSort(array, esquerda, direita) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, indiceAtual - 1);
    }
    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita)
    }
  }
  return array;
}

//recebe índice 'esquerda' e um índice 'direita' como parametros 
function particiona(array, esquerda, direita) {
  console.log('array', array)
  console.log('esquerda, direita', esquerda, direita)
  //determina o pivo no meio do array 
  let pivo = array[Math.floor((esquerda + direita) / 2)]
  let atualEsquerda = esquerda; //0
  let atualDireita = direita; //10

  while (atualEsquerda <= atualDireita) {
    while (array[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++
    }

    while (array[atualDireita].preco > pivo.preco) {
      atualDireita--
    }

    if (atualEsquerda <= atualDireita) {
      trocaLugar(array, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

//chama a função de ordenação do array e os imprimi
console.log(quickSort(listaLivros, 0, listaLivros.length - 1))



