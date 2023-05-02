let usuariosCadastrados = [];


const cadastroForm = document.getElementById("cadastro-form");
const usuariosDiv = document.getElementById("usuarios");


cadastroForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;

    if (nome.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return;
    }


    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
    };


    usuariosCadastrados.push(usuario);


    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("endereco").value = "";


    exibirUsuarios();
});


function exibirUsuarios() {

    usuariosDiv.innerHTML = "";

    usuariosCadastrados.forEach(function (usuario, indice) {
        const usuarioDiv = document.createElement("div");
        usuarioDiv.classList.add("usuario");
        usuarioDiv.innerHTML = usuario.nome;


        const dadosUsuarioDiv = document.createElement("div");
        dadosUsuarioDiv.classList.add("dados-usuario");
        dadosUsuarioDiv.innerHTML = `
      <p><strong>E-mail:</strong> ${usuario.email}</p>
      <p><strong>Telefone:</strong> ${usuario.telefone}</p>
      <p><strong>Endereço:</strong> ${usuario.endereco}</p>
    `;


        const mostrarDadosBtn = document.createElement("button");
        mostrarDadosBtn.classList.add("mostrar-dados-btn");
        mostrarDadosBtn.innerText = "Mostrar dados";
        mostrarDadosBtn.addEventListener("click", function () {
            dadosUsuarioDiv.style.display = "block";
            mostrarDadosBtn.style.display = "none";
            esconderDadosBtn.style.display = "inline-block";
        });

        const esconderDadosBtn = document.createElement("button");
        esconderDadosBtn.classList.add("esconder-dados-btn");
        esconderDadosBtn.innerText = "Esconder dados";
        esconderDadosBtn.style.display = "none";
        esconderDadosBtn.addEventListener("click", function () {
            dadosUsuarioDiv.style.display = "none";
            mostrarDadosBtn.style.display = "inline-block";
            esconderDadosBtn.style.display = "none";
        });


        usuarioDiv.appendChild(mostrarDadosBtn);
        usuarioDiv.appendChild(esconderDadosBtn);
        usuarioDiv.appendChild(dadosUsuarioDiv);
        usuariosDiv.appendChild(usuarioDiv);
    });
}