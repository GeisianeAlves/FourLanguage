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


function fazerCadastro(email, senha) {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Cadastro bem-sucedido
            var user = userCredential.user;
            // Enviar e-mail de verificação
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert('Um e-mail de verificação foi enviado para seu endereço de e-mail. Por favor, verifique seu e-mail.');
                })
                .catch((error) => {
                    console.error(error);
                });
            // Redirecionar o usuário para a página desejada
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Tratar erros de cadastro
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
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
