function duplicidadeLista(original, delecao){
    const lista = [];
    for(let buscaDuplicidade of original){
        if(!delecao.includes(buscaDuplicidade)){
                lista.push(buscaDuplicidade);
        }
        return lista; 
    }  
}
const listaOriginal = [-1, 0, 4, 3, 6, 0, 2];
const listaDelecao = [0, 2, 3];

console.log(duplicidadeLista(listaOriginal, listaDelecao));


//R: [-1]