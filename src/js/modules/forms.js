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