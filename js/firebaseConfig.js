// Importe as funções necessárias do SDK do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// Configurações do seu aplicativo Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-g_B1DTUMls5aGQNe-vX1AqGREcv28EE",
    authDomain: "four-language-b9a03.firebaseapp.com",
    databaseURL: "https://four-language-b9a03-default-rtdb.firebaseio.com",
    projectId: "four-language-b9a03",
    storageBucket: "four-language-b9a03.appspot.com",
    messagingSenderId: "313923513496",
    appId: "1:313923513496:web:a1e33aadb961e6ebf0b4ed",
    measurementId: "G-MLQDTVVQ0R"
  };

// Inicialize o Firebase com as configurações fornecidas
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// Exporte o objeto firebaseApp para que ele possa ser importado em outros arquivos
export default firebaseApp;
