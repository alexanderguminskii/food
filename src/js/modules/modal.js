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

export default modal;
export {showModal};
export {closeModal};