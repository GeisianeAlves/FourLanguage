// footerStyles.js

function applyFooterStyles() {
  var style = document.createElement('style');
  style.type = 'text/css';

  style.innerHTML = `
      /* RODAPE - FOOTER */
      .rodape {
          padding: 25px;
          color: white;
          background-color: #4c546c;
          font-size: 20px;
          font-family: "Space Mono";
      }
  `;

  document.head.appendChild(style);
}

// Chamar a função para aplicar os estilos do rodapé
applyFooterStyles();
