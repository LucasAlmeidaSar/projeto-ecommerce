export default function ativarCarrossel() {
    $('.carrossel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed: 1000,

        // autoplay: true,
        // autoplaySpeed: 3000,
    });
}