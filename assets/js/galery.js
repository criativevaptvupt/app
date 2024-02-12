const Galery = document.getElementById('Galery')

Galery.innerHTML=`
<div class="container">
    <div class="galery">
        <span class="title"></span>
        
        <h2>Veja produtos feitos por nossos profissionais.</h2>
        
        <p>Qualidade dedicção e excelencia.</p>
        
        <div>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>

        <a class="btn primary" href="#Contato">
            Veja Mais
        </a>
    </div>
    <div class="tempo">
        <span class="title"></span>
            
        <h2>Pare de perder tempo e dinheiro com tecnologia. </br>Vamos começar</h2>

        <a class="btn primary" href="#Contato">
            Veja Mais
        </a>
    </div>
</div>

`