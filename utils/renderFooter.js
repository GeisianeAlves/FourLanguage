// footerStyles.js

function applyFooterStyles() {
  var style = document.createElement('style');
  style.type = 'text/css';

  style.innerHTML = `
  const styles = {
    footer: {
      padding: '25px',
      color: 'white',
      backgroundColor: '#4c546c',
      fontSize: '14px',
      fontFamily: '"Space Mono"',
      textAlign: 'left',
    },
    footerImg: {
      width: '12vh',
    },
    floatLeft: {
      float: 'left',
      margin: '2px 10px',
      padding: '2px',
    },
    rodapeSpan: {
      margin: '2px 9px 20px 9px', // Adjust margin-bottom for spacing
      padding: '2px',
      lineHeight: '2',
    },
    footerText: {
      paddingLeft: '23px',
      paddingTop: '2px',
    },
    footerCopy: {
      paddingLeft: '23px',
      paddingTop: '2px',
    },
  };
  
  `;

  document.head.appendChild(style);
}

// Chamar a função para aplicar os estilos do rodapé
applyFooterStyles();
