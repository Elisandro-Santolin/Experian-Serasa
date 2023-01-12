function contaOcorrencia(lista, elemento){
    const listaNova = [];
    for(let elementoLista of lista){
        if(elemento === elementoLista){
            listaNova.push(elemento);
        }
    } 
    return listaNova.length;
}
const listaNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 2, 6, 6, 6, 6, 
                  1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 2, 6, 6, 6, 6,
                  1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 2, 6, 6, 6, 6,
                  1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 2, 6, 6, 6, 6,
                  1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 2, 6, 6, 6, 6
];

console.log(contaOcorrencia(listaNumeros, 2)); 

//R: 20