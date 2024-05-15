function initializarMenu() {
    
    var container = document.getElementById("container-menu");
    container.innerHTML = `
    <header class="cabecalho">
    <nav class="nav-menu">
      <img src="img/logo-four.png" alt="Logo Four Language" width="60vw">
      <ul class="lista-nao-ordenada">
        <li class="item-lista-cabecalho">
          <a href="index.html">Home</a>
        </li>
    
        <li class="item-lista-cabecalho">
          <a href="tela_skills.html">Games</a>
          <ul>
            <li class="item-lista-cabecalho"><a href="tela_skills.html">All </a></li>
            <li class="item-lista-cabecalho"><a href="quiz.html">Extra Activity </a></li>
          </ul>
        </li>
    
        <li class="item-lista-cabecalho">
          <a href="revisao.html"> Content Review</a>
          
        </li>
    
        <li class="item-lista-cabecalho"><a href="creditos.html">About</a></li>
        <li>
          <input type="text" placeholder="Search Content..." class="search-bar"> </input>
          <button class="nav-botao"><a href="login.html">Sign out</a></button>
        </li>
      </ul>
    </nav>
    
    <!-- chamando a formatacao do cabecalho -->
  <script src="utils/renderHeader.js"> </script>
 
  </header>

    `;
}

// Call the function to initialize the page
initializarMenu();