// footerStyles.js

function applyFooterStyles() {
  var style = document.createElement('style');
  style.type = 'text/css';

  style.innerHTML = `
  .rodape {
    padding: 25px;
    color: white;
    background-color: #4c546c;
    font-size: 20px;
    font-family: 'Space Mono';
  }

  footer {
    text-align: center;
    color: #fff;
    background-color: #08021dea;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 20px;
    bottom: 0px;
  
  }
  
  footer:hover {
    color: white;
  }
  @media(max-width: 540px) {
    .rodape {
      font-size: 14px;
    }
  }

  `;

  document.head.appendChild(style);
}

// Chamar a função para aplicar os estilos do rodapé
applyFooterStyles();
