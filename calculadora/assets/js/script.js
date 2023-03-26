function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}


const checkbox = document.getElementById("checkbox");
const html = document.querySelector("html");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});