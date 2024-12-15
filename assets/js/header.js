import Swiper from "swiper";
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function headerCarousel() {
    var swiper = new Swiper('.header__carousel', {
        modules: [Navigation],
        centeredSlides: true,
        loop: true,
        speed: 850,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

$(function(){
    headerCarousel();
});
