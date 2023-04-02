var campo = document.querySelector('#name')
var campo2 = document.querySelector('#name2')

function trocar() {
    event.preventDefault()
    var troca = campo2.value; 
    campo2.value = campo.value;
    campo.value = troca;
}

function limpar() {
    campo.value = "";
    campo2.value = "";
}

