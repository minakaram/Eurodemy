$(".carousel1").owlCarousel({
    // loop: true,
    margin: 15,
    nav: true,
    slideBy:4,
    dots: true,
    // autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        610: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
});
