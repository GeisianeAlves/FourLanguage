var formSignin = document.querySelector('#login');
var formSignup = document.querySelector('#cadastro');
var btnColor = document.querySelector('.btnColor');

document.querySelector('#btnLogin').addEventListener('click', () => {
  formSignin.style.left = "25px";
  formSignup.style.left = "450px";
  btnColor.style.left = "0px";
});

// Função de validação de email
function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função de validação de senha
function validarSenha(senha) {
  return senha.length >= 6;
}

function fazerLogin() {
  var emailInput = document.querySelector('#emailInput').value;
  var senhaInput = document.querySelector('#senhaInput').value;
  
  if (validarEmail(emailInput) && validarSenha(senhaInput)) {
    // Redirecionar o usuário para a página desejada
    window.location.href = 'index.html';
  } else {
    alert('Por favor, insira um email válido e uma senha com pelo menos 6 caracteres.');
  }
}
