$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    nav:true,
    smartSpeed: 2500,
    autoplay: 2500,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText : ["<div class='blog-slider__leftArrow'><img src='img/home/left-arrow.png'></div>",
        "<div class='blog-slider__rightArrow'><img src='img/home/right-arrow.png'></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})