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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
          cards = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js"),
          forms = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js"),
          modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
          timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js"),
          slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
          calculator = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");

    tabs();
    cards();
    forms();
    modal();
    timer();
    slider();
    calculator();
});

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = calculator;

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

    const getFromServer = async (url) => {
        const res = await fetch(url);

        return await res.json();
    };

    function getResource() {
        getFromServer('http://localhost:3000/menu')
            .then((data) => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new Menu(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
                });
            });
    }

    getResource();
}

module.exports = cards;

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {

    const form = document.querySelectorAll('form');

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

        postData('http://localhost:3000/requests', json)
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

        showModal();

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
            closeModal();
        }
    }
}

module.exports = forms;

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {

    const modal = document.querySelector('.modal'),
          btn = document.querySelectorAll('[data-modal]');
          
    function showModal() {
        modal.classList.add('show');
        document.body.style.cssText = 'overflow: hidden;';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.cssText = 'overflow: ;';
    }

    btn.forEach(item => {
        item.addEventListener('click', showModal);
    });

    modal.addEventListener('click', (e) => {
        const target = e.target;

        if(target === modal || target.className === 'modal__close') {
            closeModal();
        }
        
    });
}

module.exports = modal;

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {

    const slideWrapper = document.querySelector('.offer__slider-wrapper'),
          slideField = slideWrapper.querySelector('.offer__slider-inner'),
          slides = slideWrapper.querySelectorAll('.offer__slide'),
          next = document.querySelector('.offer__slider-next'),
          prev = document.querySelector('.offer__slider-prev'),
          width = window.getComputedStyle(slideWrapper).width,
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          dotsWrapper = document.querySelector('.offer__slider-indicators'); 


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

module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {

    const tabContainer = document.querySelector('.tabheader__items'),
          tab = document.querySelectorAll('.tabheader__item'),
          items = document.querySelectorAll('.tabcontent');

    tabContainer.addEventListener('click', (e) => {
        const target = e.target;


        if(target.className === 'tabheader__item') {
            tab.forEach((item, i) => {
                item.classList.remove('tabheader__item_active');
                if(target === item) {
                    hideContent();
                    showContent(i);
                }
            });

            target.classList.add('tabheader__item_active');
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

module.exports = tabs;

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {

    const deadLine = new Date('02-28-2021');

    function makeZero(num) {
        if(num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getTimeRemains(endTime) {
        const total = endTime - (new Date()),
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

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map