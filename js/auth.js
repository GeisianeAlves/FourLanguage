import firebaseApp from './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const auth = getAuth(firebaseApp);
console.log("Script de autenticação carregado.");

function fazerLogin(email, senha) {
    console.log("Tentando fazer login com email:", email);
    console.log("Tentando fazer login com senha:", senha); 
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log("Login bem-sucedido:", userCredential.user);
            window.location.href = 'index.html'; // Redirecionar após login bem-sucedido
        })
        .catch((error) => {
            console.error("Erro ao fazer login:", error.message);
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

// Função para criar o usuário
function fazerCadastro() {
    // Obtenha o valor do campo de email de cadastro
    var emailCadastro = document.getElementById('emailInput1').value;

    // Obtenha o valor do campo de senha de cadastro
    var senhaCadastro = document.getElementById('passwordInput1').value;

    // Verifique se o email e a senha são strings
    if (typeof emailCadastro === 'string' && typeof senhaCadastro === 'string') {
        console.log("Tentando criar usuário com email:", emailCadastro);
        // Chama a função para criar o usuário
        createUserWithEmailAndPassword(auth, emailCadastro, senhaCadastro)
            .then((userCredential) => {
                // Cadastro bem-sucedido
                var user = userCredential.user;
                console.log("Usuário cadastrado com sucesso:", user);
                // Redireciona o usuário para a página desejada
                window.location.href = 'index.html';
                // Envia o email de verificação após redirecionar
                sendEmailVerification(user)
                    .then(() => {
                        console.log('Um e-mail de verificação foi enviado para seu endereço de e-mail. Por favor, verifique seu e-mail.');
                    })
                    .catch((error) => {
                        console.error("Erro ao enviar email de verificação:", error);
                    });
            })
            .catch((error) => {
                // Trata erros de cadastro
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error("Erro ao criar usuário:", errorMessage);
            });
    } else {
        console.error('O email e a senha devem ser strings.');
    }
}





function resetarSenha(email) {
    console.log("Tentando redefinir senha para email:", email);
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Um e-mail para redefinição de senha foi enviado para seu endereço de e-mail. Por favor, verifique seu e-mail.');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

export { fazerLogin, fazerCadastro, resetarSenha };
