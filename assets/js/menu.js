const Menu = document.getElementById('Menu')

Menu.innerHTML=`

<nav class="navbar fixed-top navbar-expand-lg">

    <div class="container-fluid">

      <a class="navbar-brand" href="index.html">
        <img src="./assets/img/logo.png" alt="" />
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="nav ">

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
            </li>

            <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Produtos
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="landingpage.html">Landing page</a></li>
                    <li><a class="dropdown-item" href="loja.html">Loja Online</a></li>
                    <li><a class="dropdown-item" href="social.html">Social Midia</a></li>
                    <li><a class="dropdown-item" href="#">Suporte</a></li>
                  </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="galeria.html">Galeria</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="planos.html">Planos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="sobre.html">Sobre</a>
            </li>

            <li class="nav-item">
              <a class="btn primary" href="contato.html">
                  Contato
              </a>
            </li>

          </ul>
        
      </div>

    </div>

</nav>

`