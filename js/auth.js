import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import firebaseApp from './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

async function verificarUnicidadeNomeUsuario(username) {
    const usernameLowerCase = username.toLowerCase();
    const usernamesRef = ref(db, 'username');
    const snapshot = await get(usernamesRef);
    const usernames = snapshot.val();
    return !Object.keys(usernames || {}).some(key => key.toLowerCase() === usernameLowerCase);
}

async function fazerCadastro(username, email, senha) {
    if (typeof email === 'string' && typeof senha === 'string' && typeof username === 'string') {
        console.log("Tentando criar usuário com email:", email);

        const nomeUnico = await verificarUnicidadeNomeUsuario(username);
        if (!nomeUnico) {
            console.error("Nome de usuário já existe. Por favor, escolha outro.");
            alert("Nome de usuário já existe. Por favor, escolha outro.");
            return;
        }

        try {
            // Criar o usuário
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            console.log("Usuário cadastrado com sucesso:", user);

            // Crie um novo nó no banco de dados para armazenar as informações do usuário
            const usernameLowerCase = username.toLowerCase();
            await set(ref(db, `users/${user.uid}`), {
                username: usernameLowerCase,
                email: email
            });

            await set(ref(db, `usernames/${usernameLowerCase}`), user.uid);

            console.log('Informações do usuário salvas no Realtime Database');

            // Enviar email de verificação
            await sendEmailVerification(user);
            console.log('Um e-mail de verificação foi enviado para seu endereço de e-mail. Por favor, verifique seu e-mail.');
            alert('Cadastro realizado com sucesso. Verifique seu email para ativar sua conta.');

        } catch (error) {
            console.error("Erro ao criar usuário:", error.message);
        }
    } else {
        console.error('O email, a senha e o nome de usuário devem ser strings.');
    }
}

function fazerLogin(email, senha) {
    console.log("Tentando fazer login com email:", email);
    console.log("Tentando fazer login com senha:", senha);
    signInWithEmailAndPassword(auth, email, senha)
        .then(async (userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                console.log("Login bem-sucedido e email verificado:", user);

                // Obter dados do usuário do banco de dados
                const userRef = ref(db, `users/${user.uid}`);
                const snapshot = await get(userRef);
                const userData = snapshot.val();

                if (userData) {
                    // Armazenar dados do usuário no local storage
                    localStorage.setItem('username', userData.username);
                    localStorage.setItem('email', userData.email);
                }

                window.location.href = 'index.html'; // Redirecionar após login e verificação de email
            } else {
                console.log("Email não verificado.");
                alert("Por favor, verifique seu email antes de fazer login.");
                auth.signOut(); // Desconecta o usuário
            }
        })
        .catch((error) => {
            console.error("Erro ao fazer login:", error.message);
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
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged chamado.");
    if (user) {
        console.log("Usuário logado:", user);
        if (user.emailVerified) {
            console.log("Email verificado. Redirecionando...");
            window.location.href = 'index.html';
        } else {
            console.log("Email não verificado. Por favor, verifique seu email.");
            alert("Por favor, verifique seu email para ativar sua conta.");
        }
    } else {
        console.log('Nenhum usuário está logado.');
    }
});

export { fazerLogin, fazerCadastro, resetarSenha };