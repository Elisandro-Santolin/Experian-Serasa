function alteraLista(listaOriginal, index, listaModificada) {
    const indice = index + listaModificada;
        if(indice > listaOriginal.length){
            console.error("Entrada Invalida");
            return;
        }
    const saida = [...listaOriginal];
    const elemento = saida.splice(index, 1)[0];
    saida.splice(indice, 0, elemento);
            return saida; 
}
const lista = [1, 2, 3, 4, 5, 6];

console.log(alteraLista(lista, 1, 5));

//R: [1, 3, 4, 5, 6, 2]