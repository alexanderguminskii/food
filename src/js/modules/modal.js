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