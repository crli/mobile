import './index.html';
import './plugin/flexible.js';
import './main.scss';
import $ from 'jquery';
import './icon/ux_1477208519_5206258/iconfont.css'
import './plugin/swiper.min.css';
import './plugin/swiper.min.js';
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});