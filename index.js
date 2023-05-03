const {edGalho, edfolha } = reqired('./arrays');

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = Lista1[posicaoAtualLista1]
        let produtoAtualLista2 = Lista1[posicaoAtualLista2]

        if (produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1
            posicaoAtualLista1++;
        }
    }


    return listaFinal;
}