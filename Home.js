$(".carousel1").owlCarousel({
    // loop: true,
    margin: 15,
    nav: true,
    dots: true,
    // autoplay: true,
    responsive: {
        0: {
            items: 2,
        },
        610: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
});