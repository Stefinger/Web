
import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function timelineThird() {
    var swiper = new Swiper('.timeline-third__carousel', {
        modules: [Navigation],
        centeredSlides: true,
        slidesPerView: 1,
        direction: 'vertical',
        spaceBetween: 100,
        speed: 700,
        navigation: {
            nextEl: '.navigation .swiper-button-next',
            prevEl: '.navigation .swiper-button-prev',
        },
    });
}
$(function(){
    timelineThird();
});