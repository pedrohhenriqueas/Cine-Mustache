var regUsuario;
var regSenha;

function registrarUsuario() {
    regUsuario = document.getElementById("regUsuario").value;
    regSenha = document.getElementById("regSenha").value;
    var message = document.getElementById("message2");
    
    message.innerHTML = "Registro feito com sucesso!";
    message.style.color = "green";

    document.getElementById("registrar").reset();
}

function telaRegistro() {
    var registrar = document.getElementById("registrar");
    var login = document.getElementById("login");
  
    registrar.style.display = "block";
    login.style.display = "none";
}

function voltar() {
    var registrar = document.getElementById("registrar");
    var login = document.getElementById("login");
  
    registrar.style.display = "none";
    login.style.display = "block";
}

function logar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var message = document.getElementById("message");

    if (usuario === regUsuario && senha === regSenha) {
        message.innerHTML = "Login efetuado!";
        message.style.color = "green";
      } else {
        message.innerHTML = "Login ou senha Inválidos, tente novamente.";
        message.style.color = "red";
      };
}