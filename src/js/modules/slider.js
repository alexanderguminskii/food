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

export default slider;