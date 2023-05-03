const listaLivros = require('./array2');

function mergeSort(array2){
    if(array2.lenght > 1){
        const meio = Math.floor(array2.lenght / 2);
        const parte1 = mergeSort(array2.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array2.lenght));

    }

}