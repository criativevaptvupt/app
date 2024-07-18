const faq = document.getElementById('faq')

faq.innerHTML=`

<div class="container pt-5 pb-5 text-center">
    <div class="row">
        <h2 class="pb-3">FAQ </h2>
        </br>
        <p>
            Perguntas frequentes sobre Criative VaptVupt
        </p>
    </div>
    <div class="row">
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Posso ter confiança que o material pago sera entrege?
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    Sim! com toda certeza, Todos os nossos produtos são entregues, somos uma equipe de profissionais  comprometidos em entregar os produtos de alta qualidade para nossos clientes e parceiros.
                </div>
            </div>
            </div>
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Como posso fazer os pedidos?
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    Pedimos atenciosamente para que preencha nosso formulário de contato com as informações do produto que gostaria, que você será direcionado para o whatsapp de nossa atendente. 
                </div>
            </div>
            </div>
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Prazos de Entrega?
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Nossos prazos são estimados apartir do primeiro depósito de 50% para darmos inicio a demandada do produto. Pedimos que dê total atenção para nossosprofissionais para que possamos finalizar o produto, antes do prazo de entrega.</div>
            </div>
            </div>
        </div>
    </div>

</div>

`