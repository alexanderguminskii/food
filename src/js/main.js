"use strict";

const { slice } = require("core-js/fn/array");

window.addEventListener('DOMContentLoaded', () => {
    //Tabs

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
 
    //Modal

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

    //Forms

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

    //use Classes

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

    //Timer

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

    //Slider

    const slide = document.querySelectorAll('.offer__slide'),
          currentNum = document.querySelector('#current'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next');

    let count = 1;

    function makeCurrent(current) {
        currentNum.textContent = makeZero(current);
    }

    function hideSlides() {
        slide.forEach(item => {
            item.classList.add('hide');
        });
    }

    function showSlide(i = 0) {
        slide[i].classList.remove('hide');
        slide[i].classList.add('show');
    }

    next.addEventListener('click', (e) => {
        hideSlides();
        showNextSlide();
        
        function showNextSlide() {
            function nextNumber() {
                count++;
                if(count > 4) {
                    count = 1;
                }
                makeCurrent(count);
            }

            function nextSlide() {
                slide.forEach((item, i) => {
                    if(count == i + 1) {
                        showSlide(i);
                    }
                });
            }
            
            nextNumber();
            nextSlide();
        }
        
    });

    prev.addEventListener('click', (e) => {
        hideSlides();
        showPrevSlide();
    
        function showPrevSlide() {
            function prevNumber() {
                count--;
                if(count <= 0) {
                    count = 4;
                }
                makeCurrent(count);
            }

            function prevSlide() {
                slide.forEach((item, i) => {
                    i++;
                    if(count == i) {
                        showSlide(i - 1);
                    }
                });
            }

            prevNumber();
            prevSlide();
        }
    });
    
    makeCurrent(count);
    hideSlides();
    showSlide();
});