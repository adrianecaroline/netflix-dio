$('.owl-carousel').owlCarousel({
    loop:false, //o carregamento dos filmes tem um fim
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6 //quando a tela tem + de 1000px, pode mostra 5 items
        }
    }
})