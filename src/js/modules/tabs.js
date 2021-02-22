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

export default tabs;