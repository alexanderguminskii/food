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