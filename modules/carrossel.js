export default function ativarCarrossel() {
    $('.carrossel').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}