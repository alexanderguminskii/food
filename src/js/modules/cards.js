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