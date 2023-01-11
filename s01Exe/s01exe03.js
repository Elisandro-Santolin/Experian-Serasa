function mediaFinal (n01, n02, n03, n04){
    let media =  "";
    media = ((n01 + n02 + n03 + n04) / 4);
      if (media >= 6.0){
        return ("APROVADO " + media.toFixed(1));
    }else if (media >= 3.0 && media < 6.0) {
        return ("EXAME " + media.toFixed(1));
    }else {
        return ("RETIDO " + media.toFixed(1)); 
    } 
}
console.log(mediaFinal(6.8,5.3,8, 7)); 
