$('.counter').countUp();

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('toggle-active');
    });
});


$(document).ready(function () {
    $('#owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
            items: 1,
            nav: false
            },
            480: {
            items: 1,
            nav: false
            },
            667: {
            items: 1,
            nav: false
            },
            1000: {
            items: 2,
            nav: false
            }
        }
    })
})


$('.number_up').countUp();


$('.comment__content').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true
});


        
