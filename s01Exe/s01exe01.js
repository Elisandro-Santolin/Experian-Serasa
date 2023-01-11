function radarVelocidade (velocidadeMax, velocidadeLocal) {
    if(velocidadeLocal > velocidadeMax) {
        return "Veículo acima da velocidade permitida!";
    }else {
        return "Veículo dentro da velocidade permitida!";
    }    
}
console.log(radarVelocidade(110, 45));
