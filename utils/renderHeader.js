function applyStyles() {
  // Criar uma tag style
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // Adicionar o CSS ao estilo
  style.innerHTML = `
    /* cabecalho - HEADER */
    @import url("https://fonts.googleapis.com/css2?family=Cookie&family=Jost:wght@200;300&family=Lora:wght@600&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
  
    * {
      box-sizing: border-box;
      text-decoration: none;
      margin: 0;
    }
  
    html {
      font-size: 16px;
  
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
  
    /* cabecalho + nav */
    .cabecalho {
      font-family: "Space Mono";
      align-items: last baseline;
      background-color: #4c546c;
      color: white;
      padding: 2% 0px 0px;
      /* text-transform: lowercase; */
    }
  
    /* caso queira deixar tudo em caixa alta é text-transform */
  
    .item-lista-cabecalho:hover {
      color: rgb(186, 250, 228);
    }
  
    .lista-nao-ordenada{
    }
  
    /* botao de sair */
    .nav-menu button {
      background: none;
      color: white;
      font-family: "Space Mono";
      border: 2px solid rgba(245, 222, 179, 0.738);
      border-radius: 15px; /* Ajuste o valor de acordo com o arredondamento desejado */
      padding: 10px 20px; /* Ajuste o espaçamento interno conforme necessário */
      cursor: pointer;
      font-weight: bold;
    }
  
    .nav-botao:hover {
      color: rgb(186, 250, 228);
    }
  
    .nav-menu a {
      color: inherit; /* Herda a cor do texto do elemento pai */
    }
  
    .nav-menu img {
      margin-bottom: 15px;
      margin-left: 13px;
    }
  
    .nav-menu {
      display: flex;
      justify-content: left;
      align-items: flex-start;
      column-gap: 28px;
    }
  
    .nav-menu ul {
      list-style: none;
      padding: 0;
      margin: 22px;
      display: flex;
    }
  
    .nav-menu ul li {
      margin-right: 20px; /* Adapte a margem conforme necessário */
      position: relative; /* Define posição relativa para alinhar a sub-lista */
    }
  
    .nav-menu ul li ul {
      display: none;
      position: absolute; /* Posicionamento absoluto em relação ao item pai */
      top: 100%; /* Aparece abaixo do item pai */
      left: 0; /* Alinha com o lado esquerdo do item pai */
      background-color: #4c546c; /* Fundo cinza */
      color: #fff; /* Cor do texto branca */
      padding: 10px; /* Adiciona espaço interno */
    }
  
    .nav-menu ul li:hover > ul {
      display: block;
    }
  
    /* barra de pesquisa config */
    input {
      background-color: rgba(245, 222, 179, 0.86);
      border: 1px solid rgba(245, 222, 179, 0.86);
      border-radius: 10px;
    }
  `;
  
  // Adicionar o estilo ao head do documento
  document.head.appendChild(style);
}

// Chamar a função para aplicar os estilos
applyStyles();
