const Contato = document.getElementById('Contato')

Contato.innerHTML=`

<div class="contact">
    <div class="container">

        <div class="col-content">
            <span class="title"></span>
            <h2>
                Começe algo Novo 
            </h2>
            <h2>Entre em contato agora mesmo.</h2>
            
            <p>Para mais informações ou para agendar uma </br> sessão de criação de VAPT Vupt.</p>
            

            </br>
            </br>
            <div class="content-text">
                <a href="mailto:contato@vaptvupt.com">contato@vaptvupt.com</a>
                <span>
                    <p>
                        CNPJ: 45.056.613/0001-89 - 45056613000189
                    </p>
                </span>
                <div class="social">
                    <a href="https://www.facebook.com/people/Criativevapt-vupt/61554934358309/"><img src="./assets/img/face.png" alt="" /></a>
                    <a href="https://www.instagram.com/criative.vaptvupt/"><img src="./assets/img/instagram.png" alt="" /></a>
                </div>
            </div>

        </div>

        <div class="col-content">
            <div class="form">
                <form action="#" method="get" onsubmit="abrirWhatsapp()">
                    <input type="text" name="nome" id="nome" placeholder="Nome" required /><br />
                    <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required /><br />
                    <input type="email" name="email" id="email" placeholder="E-mail" required /><br />
                    <textarea class="msg" name="msg" id="msg" placeholder="Digite sua Mensagem.." rows="2" required></textarea><br />
                        </br>
                    <button type="submit">Enviar</button>
                </form>
            </div>  
        </div>
         

    </section>


</div>

`
function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5512981021517?text=" // Seu numero
    + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
}