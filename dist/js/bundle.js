/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");








window.addEventListener('DOMContentLoaded', () => {

    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal', '[data-modal]');
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_4__["default"])('02-28-2021');
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
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
    Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator() {

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if(!localStorage.getItem('sex')) {
        sex = 'female';
        localStorage.setItem('sex', sex);
    }

    if(!localStorage.getItem('ratio')) {
        ratio = 1.375;
        localStorage.setItem('ratio', ratio);
    }

    function initLocalSetings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
            if(localStorage.getItem('sex') === el.getAttribute('id')) {
                elements.forEach(el => el.classList.remove(activeClass));
                el.classList.add(activeClass);
            }

            if(localStorage.getItem('ratio') === el.getAttribute('data-ratio')) {
                elements.forEach(el => el.classList.remove(activeClass));
                el.classList.add(activeClass);
            }
        });
    }

    initLocalSetings('#gender div','calculating__choose-item_active');
    initLocalSetings('.calculating__choose_big div', 'calculating__choose-item_active');

    function totalCalc() {
        if(!sex || !height || !weight || !age || !ratio) {
            result.textContent = '---';
            return;
        }

        if(sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    totalCalc();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
            el.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }

                elements.forEach(el => el.classList.remove(activeClass));
                e.target.classList.add(activeClass);
                
                totalCalc();
            });
        });
    }

    getStaticInformation('#gender div','calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', (e) => {
            if(input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch(e.target.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            totalCalc();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function cards() {
    
    class Menu {
        constructor(src, altimg, title, descr, price, selector, ...classes) {
            this.src = src;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.bid = 2.5;
            this.parent = selector;
            this.class = classes;
            this.converter();
        }
        converter() {
            this.price = this.price * this.bid;
        }
        render() {
            const parent = document.querySelector(this.parent);

            const itemElement = document.createElement('div');
            
            if(this.class.length === 0) {
                this.class = 'menu__item';
                itemElement.classList.add(this.class);
            } else {
                this.class.forEach(item => {
                    itemElement.classList.add(item);
                });
            }
            itemElement.innerHTML = `
                <img src="${this.src}" alt="${this.altimg}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> BYN</div>
                </div>
            `;
            parent.append(itemElement);
        }
    }

    function getResource() {
        Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getFromServer"])('http://localhost:3000/menu')
            .then((data) => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new Menu(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
                });
            });
    }

    getResource();
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");



function forms(formSelector) {

    const form = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        seccess: 'Ok!',
        error: 'Error'
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            bindPostData(item);
        });
    });

    function bindPostData(form) {

        const load = document.createElement('img');
        load.src = message.loading;
        load.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.append(load);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData));

        Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
        .then(data => {
            thanksForm(message.seccess);
            console.log(data);
        })
        .catch(() => {
            thanksForm(message.error);
        })
        .finally(() => {
            form.reset();
            load.remove();
        });
    }

    function thanksForm(message) {
        const modalDialog = document.querySelector('.modal__dialog'),
              modalContent = document.querySelector('.modal__content'),
              timeId = setTimeout(removeThanksModal, 4000);

        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])('.modal');

        modalContent.classList.add('hide');

        const modalThanks = document.createElement('div');
        modalThanks.classList.add('modal__content');
        modalThanks.innerHTML = `
            <div class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        `;

        modalDialog.append(modalThanks);
        
        function removeThanksModal() {
            modalThanks.remove();
            modalContent.classList.remove('hide');
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, showModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
function showModal(modalCalass) {
    const modal = document.querySelector(modalCalass);

    modal.classList.add('show');
    document.body.style.cssText = 'overflow: hidden;';
}

function closeModal(modalCalass) {
    const modal = document.querySelector(modalCalass);

    modal.classList.remove('show');
    document.body.style.cssText = 'overflow: ;';
}

function modal(modalCalass, modalTriger) {

    const modal = document.querySelector(modalCalass),
          btn = document.querySelectorAll(modalTriger);
 
    btn.forEach(item => {
        item.addEventListener('click', () => showModal(modalCalass));
    });

    modal.addEventListener('click', (e) => {
        const target = e.target;

        if(target === modal || target.className === 'modal__close') {
            closeModal(modalCalass);
        }
        
    });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({slidesSelector, wrapper, field, nextClass, prevClass, totalSlide, currentSlides, dots}) {

    const slideWrapper = document.querySelector(wrapper),
          slideField = slideWrapper.querySelector(field),
          slides = slideWrapper.querySelectorAll(slidesSelector),
          next = document.querySelector(nextClass),
          prev = document.querySelector(prevClass),
          width = window.getComputedStyle(slideWrapper).width,
          current = document.querySelector(currentSlides),
          total = document.querySelector(totalSlide),
          dotsWrapper = document.querySelector(dots); 


    let slideIndex = 1,
        offset = 0,
        countDots = 0,
        dotsArr = [];
    
    function makeSlideZero() {
        if(slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
            total.textContent = `0${slides.length}`;
        } else {
            current.textContent = slideIndex;
            total.textContent = slides.length;
        }
    }

    function dotsColor(dots) {
        dots.forEach(dot => dot.style.backgroundColor = '#fff');
        dots[slideIndex - 1].style.backgroundColor = 'rgb(51, 193, 236)';
    }

    function onlyNumbers(str) {
        return +str.replace(/\D/g, '');
    }

    slideField.style.width = 100 * slides.length + '%';
    slideField.style.display = 'flex';
    slideField.style.transition = '0.5s all';
    
    slideWrapper.style.overflow = 'hidden';

    slides.forEach(() => countDots++);

    function makeDots() {
        for(let i = 0; i < countDots; i++) {
            const dot = document.createElement('div');
    
            dot.classList.add('dot');
            dotsWrapper.append(dot);
    
            dotsArr[i] = dot;
        }
    }

    makeDots();

    dotsArr[slideIndex - 1].style.backgroundColor = 'rgb(51, 193, 236)';

    next.addEventListener('click', (e) => {
        if(offset == onlyNumbers(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += onlyNumbers(width);
        }
        slideField.style.transform = `translateX(-${offset}px)`;


        if(slideIndex == slides.length) {
            slideIndex = 1;
            makeSlideZero();
        } else {
            slideIndex++;
            makeSlideZero();
        }

        dotsColor(dotsArr);
    });

    prev.addEventListener('click', () => {
        if(offset == 0) {
            offset = onlyNumbers(width) * (slides.length - 1);
        } else {
            offset -= onlyNumbers(width);
        }
        slideField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
            makeSlideZero();
        } else {
            slideIndex--;
            makeSlideZero();
        }

        dotsColor(dotsArr);
    });

    dotsWrapper.addEventListener('click', (e) => {
        const target = e.target;
        if(target.className === 'dot') {        
            dotsArr.forEach((dot, i) => {
                if(dot === target) {     
                    offset = onlyNumbers(width) * i;
                    slideField.style.transform = `translateX(-${offset}px)`;
                    
                    dotsArr.forEach(dot => dot.style.backgroundColor = '#fff');
                    dotsArr[i].style.backgroundColor = 'rgb(51, 193, 236)';

                    slideIndex = i + 1;
                    makeSlideZero();
                }
            });
        }
    });

    makeSlideZero();
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabCantainerSelector, tabsSelector, itemsSelector, activeSelector) {

    const tabContainer = document.querySelector(tabCantainerSelector),
          tab = document.querySelectorAll(tabsSelector),
          items = document.querySelectorAll(itemsSelector);

    tabContainer.addEventListener('click', (e) => {
        const target = e.target;


        if(target.className === tabsSelector.slice(1)) {
            tab.forEach((item, i) => {
                item.classList.remove(activeSelector);
                if(target === item) {
                    hideContent();
                    showContent(i);
                }
            });

            target.classList.add(activeSelector);
        }
    });

    function  showContent(i = 0) {
        items[i].classList.remove('hide');
        items[i].classList.add('show');
    }

    function  hideContent() {
        items.forEach(tab => {
            tab.classList.add('hide');
        });
    }

    hideContent();
    showContent();
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(deadLine) {

    function makeZero(num) {
        if(num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getTimeRemains(endTime) {
        const total = Date.parse(endTime) - (new Date()),
              days = Math.round(total / 1000 / 60 / 60 / 24),
              hours = Math.round((total / 1000 / 60 / 60) % 24),
              minutes = Math.round((total / 1000 / 60) % 60),
              seconds = Math.round((total / 1000) % 60);
        
        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimer(endTime) {
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeId = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemains(endTime);

            days.textContent = makeZero(t.days);
            hours.textContent = makeZero(t.hours);
            minutes.textContent = makeZero(t.minutes);
            seconds.textContent = makeZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timeId);
            }
        }

        updateClock();
    }

    setTimer(deadLine);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getFromServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromServer", function() { return getFromServer; });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getFromServer = async (url) => {
    const res = await fetch(url);

    return await res.json();
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map