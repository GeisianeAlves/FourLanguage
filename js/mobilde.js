// footerStyles.js

function applyFooterStyles() {
  var style = document.createElement('style');
  style.type = 'text/css';

  style.innerHTML = `
  
  *{
      list-style: none;  
  }
  .header {
  background-color: #4c546c;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
  top: 0;
  
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #4c546c;
  font-color: white;
}

.header li a {
  display: block;
  padding: 0px 12px;
  border-right: 1px solid #f4f4f4;
  color:white;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: rgb(186, 250, 228);
}
.header button {
  background: none;
      background-color: rgba(245, 222, 179, 0.86);
    border: 1px solid rgba(245, 222, 179, 0.86);
    border-radius: 10px;
    color: rgb(93, 91, 91);
    font-weight: bold;
}
}
.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.search-bar{
        background-color: rgba(245, 222, 179, 0.86);
    border: 1px solid rgba(245, 222, 179, 0.86);
    border-radius: 10px;
    color: rgb(93, 91, 91);
    font-weight: bold;

}
.header .menu-icon .navicon {
  background: white;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: white;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: max-content;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

.header li form{
  margin-right: 0px;
    position: relative;
    padding-right: 37px;
}

.header li input{
  padding: 10px 20px;
    width: 250px;
}

.nav-menu button {
    background: none;
    color: white;
    font-family: "Space Mono";
    border: 2px solid rgba(245, 222, 179, 0.738);
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
}
/* 48em = 768px */

@media (max-width: 48em) {
  .header {
    display: block !important;
  }

  .container-nav {
    display: none !important;
  }
}





  `;

  document.head.appendChild(style);
}

// Chamar a função para aplicar os estilos do rodapé
applyFooterStyles();
