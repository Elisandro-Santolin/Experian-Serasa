function max(lista){
    if(lista.length === 0) {
        return undefined;
    }
    let numeroMax = lista[0];
    
    for(let index = 1; index < lista.length; index++){
        if(lista[index] >  numeroMax){
            numeroMax = lista[index];
        }
    }
    return numeroMax; 
}
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(max(listaNumeros)); 
