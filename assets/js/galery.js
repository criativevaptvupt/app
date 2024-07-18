const Galery = document.getElementById('Galery')

Galery.innerHTML=` 
<section style="background-color:#C9DDFB;">
    <div class="container pt-5 pb-5">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="content-title mb-5">
                    <h2>Veja produtos feitos por nossos profissionais.</h2>
                    <p>Qualidade dedicação e excelencia.</p>
                </div>
            </div>
        </div>

    <!-- Gallery -->

        <div class="row">

            <div class="col-lg-4 col-md-12  mb-4 mb-lg-0">

                <img src="./assets/lp/img/segGo-1.png"
                    class="w-100 shadow-1-strong rounded  mb-4"
                    alt="Boat on Calm Water" />

                <img src="./assets/lp/img/f12-1.png"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape" />

            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                src="./assets/lp/img/royal-1.png"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
                />

                <img
                src="./assets/lp/img/cadmax-1.png"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                src="./assets/lp/img/ekipar-1.png"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
                />

                <img
                src="./assets/lp/img/flix-1.png"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
                />
            </div>
        </div>
    <!-- Gallery -->
        <div class="row mt-5">
            <div class="col-12 text-center mb-4">
                <a class="btn primary" href="https://wa.me/5512981021517/">
                    Fale agora <i class="fa-brands fa-whatsapp icon wb"></i>
                </a>
            </div>
        </div>
    </div>
</section>
`
// Galery.innerHTML=`
// <div class="sucess container-fluid align-items-center pt-5" style="background:#C9DDFB;">
//     <div class="col sucess">
//     <h2>Garanta o sucesso a longo prazo da sua Empresa.</h2>
//         </br>
//         <p>
//             Profissionais qualificados e focados no crescimento  do seu negócio.
//         </p>
//     </div>
//     <div class="col img">
//         <img src="./assets/img/reviews.png" alt="" />
//     </div>
// </div>

// <div class="container">
//     <div class="galery">
//         <span class="title"></span>
//         <h2>Veja produtos feitos por nossos profissionais.</h2>
//         <p>Qualidade dedicação e excelencia.</p>

//         <div class="produtos">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-md-4 col-sm-6 col-xs-12">
//                     <!-- Button trigger modal -->
//                     <div class="card">
//                             <div class="card-header">
//                                 <img src="./assets/img/produtos/Social-Midia/FEED-ESQUINA.png" alt="" />
//                             </div>    
//                             <div class="card-body">
//                                 <h6>Loja de Roupas e equipamentos variados esportivos.</h6>
//                                 <p>Design e Gestão das Midias sociais.
//                                     </p>
//                             </div>
//                             <div class="footer">
//                                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                                     Ver Material
//                                 </button>
//                             </div>
//                     </div>
                    
                    
//                     <!-- Modal -->
//                     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                       <div class="modal-dialog">
//                         <div class="modal-content">
//                           <div class="modal-header">
//                             <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                           </div>
//                           <div class="modal-body">
//                             ...
//                           </div>
//                           <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary">Save changes</button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     </div>

//                 </div>
//             </div>
            
//             <div class="container">
//                 <div class="row">
//                     <div class="col-12">
//                         <p>Lojas Online.</p>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <div class="card-header">
//                                 <img src="./assets/img/produtos/ecommerce/olfati.png" alt="" />
//                             </div>    
//                             <div class="card-body">
//                                 <h6>E-commerce</h6>
//                                 <p>Loja de produtos, aromatização profissional, interface e prototipação feito para Olfati.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <div class="card-header">
//                                 <img src="./assets/img/produtos/ecommerce/nike.png" alt="" />
//                             </div>    
//                             <div class="card-body">
//                                 <h6>E-commerce</h6>
//                                 <p>Loja de produtos, Calçados Nike Air Max, interface e prototipação feito para Nike.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <div class="card-header">
//                                 <img src="./assets/img/produtos/ecommerce/tudopraela.png" alt="" />
//                             </div>    
//                             <div class="card-body">
//                                 <h6>E-commerce</h6>
//                                 <p>Loja de produtos, roupas fitness e acessórios femininos, interface e prototipação feito para Tudo pra Ela.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
                
//         </div>
        
//     </div>
    
// </div>
// <div class="social container-fluid">
    
//     <div class="col sucess">
//         <h2>Pare de perder tempo e dinheiro com tecnologia. </br>Vamos começar</h2>
//         </br>
        
//         <a class="btn primary" href="contato.html">
//             Ver Mais
//         </a>
//     </div>
//     <div class="col img">
//         <img src="./assets/img/ai.png" alt="" />
//     </div>
// </div>

// `




