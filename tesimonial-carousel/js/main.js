$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 15,
        items:3,
        loop : true,
        autoplay : true,
        autoplayTimeout : 3000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:3
            },
            1920:{
                items:3
            }
        }

    });
})