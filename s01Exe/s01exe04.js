function mostraPrimo (limite) {
    for(let j = 2; j <= limite; j++){
        if(verificaPrimo(j)){
            console.log(j);
        }
    }    
}
function verificaPrimo (numero){
    for (let i = 2; i < numero; i++){
        if(numero %i === 0){
            return false; 
        }
    }
    return true; 
}
mostraPrimo(35);

