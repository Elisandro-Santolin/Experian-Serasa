let tdTotalItens = document.querySelector('.js-total-de-itens');
let tdTotalPreco = document.querySelector('.js-total-preco');
let buttonConfirmar = document.querySelector('.js-botao-compras');


let totalItens = 0;
let totalPreco = 0;

function adicionaItem(checkbox){
    if(checkbox.checked){
    totalItens++;
    totalPreco += parseInt(checkbox.value);
    }else {
        totalItens--;
        totalPreco -= parseInt(checkbox.value);
    }
    tdTotalItens.textContent = totalItens + ' itens';
    tdTotalPreco.textContent = totalPreco + ' reais';
}  

buttonConfirmar.onclick = confirmaCompra;

function confirmaCompra(){
    if(totalItens === 0){
        alert('Nenhum item adicionado ao carrinho.');
    }else {
        alert('Itens adicionados ao carrinho.');
    }
}