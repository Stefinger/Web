function formPopover() {
    const popoverButton = document.querySelector('.form-popover__button');
    const popover = document.querySelector('.form-popover__content');
    const closeButton = document.querySelector('.close-button');

    popoverButton.addEventListener('click', () => {
        popover.classList.toggle('show');
    });

    closeButton.addEventListener('click', () => {
        popover.classList.remove('show');
    });
}

$(function(){
    formPopover();
});