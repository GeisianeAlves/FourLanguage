function applyStyles() {
  // Criar uma tag style
  var style = document.createElement("style");
  style.type = "text/css";

  // Adicionar o CSS ao estilo
  style.innerHTML = `
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
    padding: 1% 0px 0px;
    /* text-transform: lowercase; */
  }
  
  /* caso queira deixar tudo em caixa alta é text-transform */
  
  .item-lista-cabecalho:hover {
    color: rgb(186, 250, 228);
    
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
    margin-bottom: 25px;
    margin-left: 23px;
  }
  
  .nav-menu {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    column-gap: 8px;
    flex-wrap: wrap;
  }
  
  .nav-menu ul {
    list-style: none;
    padding: 0;
    margin: 22px;
    display: flex;
  }
  
  .container-nav ul li {
    margin-right: 4px;
    position: relative;
    font-size: 1rem;
    padding-right: 37px;

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
  
  
  /* itens - semestres */
  /* Estilos para os itens do menu principal */
  .item-lista-cabecalho {
    display: flex; /* Ativa layout flexbox */
    align-items: center; /* Alinha verticalmente no centro */
    font-family: "Space Mono";
    color: white;
    text-decoration: none;
    font-size: 14px;
    position: relative;
    height: 40px; /* Define a altura dos itens */
    /* Adicionando propriedades para alinhar e dimensionar no hover */
    transition: all 0.3s ease; /* Define a transição para as mudanças */
  }
  
  .item-lista-cabecalho:hover {
    background-color: #33435c; /* Cor de fundo ao passar o mouse */
    width: 178px; /* Define a largura da caixa no hover */
    padding: 10px; /* Adiciona padding para espaçar o texto da borda */
  }
  
  /* Estilos para as sublistas do menu principal */
  .item-lista-cabecalho ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    background-color: #4c546c;
    position: absolute; /* Posicionamento absoluto para sublistas */
    left: 100%; /* Posiciona à esquerda do item pai */
    top: 100%; /* Posiciona abaixo do item pai */
    z-index: 1; /* Garante que a sublista fique em cima do item pai */
    visibility: hidden; /* Oculta a sublista inicialmente */
    transition: all 0.3s ease; /* Define a transição para mostrar/ocultar a sublista */
  }
  
  .item-lista-cabecalho:hover ul {
    visibility: visible; /* Mostra a sublista quando o item pai é hoverizado */
  
  }
  
  .item-lista-cabecalho ul li {
    padding: 5px 20px;
    background-color: #4c546c;
    color: white;
    font-size: 14px;
    text-align: center;
  }
  
  
  
  /* MENU DO LADO DIREITO DA TELA */
  /* Estilos para o menu-direita */
  .menu-direita {
    position: absolute; /* Posicionamento absoluto */
    right: 0; /* Alinha à direita */
    nav-left: 90px;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  
  
  
  /* barra de pesquisa config */
  .search-bar {
    background-color: rgba(245, 222, 179, 0.86);
    border: 1px solid rgba(245, 222, 179, 0.86);
    border-radius: 10px;
    color: rgb(93, 91, 91);
    font-weight: bold;
  }
  /* Estilos da barra de pesquisa (dentro de menu-direita) */
  .menu-direita input {
    flex: 1; /* Ocupa todo o espaço disponível */
    padding: 10px 20px; /* Adiciona padding para espaçar o texto da borda */
    width: 250px; /* Largura da barra de pesquisa */
  }
  
  .menu-direita input::placeholder {
    color: gray; 
    font-weight: bold;/* Cor do texto de placeholder */
  }
  
  /* Estilos para o botão de logout */
  .menu-direita button input {
    background: none;
    color: white;
    font-family: "Space Mono";
    border: 2px solid rgba(245, 222, 179, 0.738);
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 15px; /* Espaçamento entre o botão e a barra de pesquisa */
    height: 30px; 
  }
  /* Responsive styles */


  /* Responsive styles */
  @media (max-width: 500px) {
    .img-units {
      width: 62vw;
      height: 26vh;
    }
    .revisao-item{
      width: 80%;
      padding: 113px 13px 16px 6px; 
      }
      
      .revisao-item p {
      font-size: 18px;
      padding: 7px 20px 15px 24px;
      }
      
     
  
     
  }

  @media (max-width: 720px) {
    .img-units {
      width: 64vw;
      height: 27vh;
    }
  
    .revisao-item{
      width: 80%; 
      }
      
      .revisao-item p {
      font-size: 18px;
      padding: 7px 18px 15px 24px;
      }
      
      span .revisao-item{
      Font-size: 13px;
      }
  }


@media (max-width: 768px) {
  .nav-menu { /* Target the entire menu for mobile responsiveness */
    position: absolute; /* Position off-screen initially */
    top: 91px; /* Place below header content */
    left: 0; /* Align to left side */
    width: 100%; /* Full width on mobile */
    background-color: #4c546c; /* Background color for mobile menu */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    padding: 27px 0px 38px 8px; /* Padding for mobile menu content */
    transition: transform 0.3s ease-in-out; /* Smooth menu slide animation */
    transform: translateY(-90%); /* Initially hidden */
    column-gap: 2px;
  }

  .nav-menu ul{
    margin: 2px 2px 0px 0px;
    padding: 2px 20px 2px 58px;
  }

  

  .lista-nao-ordenada {
    display: block; /* Ensure submenus stack vertically on mobile */
  }

  .menu-direita li {
    right: 28px;
    top: 35px;
    width: auto;
  }

  .nav-menu button{
    padding: 4px 10px;
    margin-top: 7px;
    
  }
  .menu-direita input{
    padding: 8px 5px;
    width: 152px;
    font-size: 13px;

  }

  
  .container-nav ul li{
    right: 15px;
        bottom: 15px;
    }
  }
  

  .item-lista-cabecalho .menu-direita{
    display: block; /* Display list items vertically on mobile */
    margin: 0; /* Remove margins for cleaner layout */
    padding: 10px; /* Padding for mobile menu items */
  }

  .item-lista-cabecalho a {
   
    font-size: 14px; /* Adjust font size for better readability */
  }

 

  
  /* Add menu toggle button */
  
  .menu-toggle {
    display: block; /* Display the toggle button on mobile */
    padding: 10px; /* Add some padding for better interaction */
  }

  .menu-toggle:before {
    content: '\f0c9'; /* Font Awesome icon for menu (bars) */
    font-family: FontAwesome, sans-serif; /* Ensure icon font is loaded */
    font-size: 20px; /* Adjust icon size as needed */
    color: #333; /* Adjust icon color */
  }

  /* Animate menu toggle */
  .nav-menu.active {
    transform: translateY(-30%); 
  }
}
  
  
  
  
  `;

  // Adicionar o estilo ao head do documento
  document.head.appendChild(style);
}

// Chamar a função para aplicar os estilos
applyStyles();
