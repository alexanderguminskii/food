import  tabs from './modules/tabs';
import  cards from './modules/cards';
import  forms from './modules/forms';
import  modal from './modules/modal';
import  timer from './modules/timer';
import  slider from './modules/slider';
import  calculator from './modules/calculator';

window.addEventListener('DOMContentLoaded', () => {

    tabs('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
    cards();
    forms('form');
    modal('.modal', '[data-modal]');
    timer('02-28-2021');
    slider({
        slidesSelector: '.offer__slide',
        nextClass: '.offer__slider-next',
        totalSlides: '#total',
        prevClass: '.offer__slider-prev',
        currentSlides: '#current',
        totalSlide: '#total',
        dots: '.offer__slider-indicators',
        field: '.offer__slider-inner',
        wrapper: '.offer__slider-wrapper'
    });
    calculator();
});