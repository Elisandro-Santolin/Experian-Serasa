function fibonacci (termo){

    let primeiroNumero = 0;
    let segundoNumero = 1;
    let proximoNumero;

    for(let i = 1; i <= termo; i++){
        console.log(primeiroNumero);

        proximoNumero = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = proximoNumero;
    }
}
console.log(fibonacci(10));