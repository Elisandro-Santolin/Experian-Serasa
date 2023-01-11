function verificacaoValores(valor){
  if(valor){
    return "O valor " + valor + " é considerado truthy";
  }else {
    return "O valor " + valor + "é considerado falsy ";
  }
}
console.log(verificacaoValores(1));