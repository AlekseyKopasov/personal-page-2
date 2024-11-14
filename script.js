const btn = document.querySelector('.send-me');
const modal = document.querySelector('.modal');

// const closeBtn = modal.querySelector('.modal__close');

function onBtnOpen() {
  modal.classList.add('is-active');
}

btn.addEventListener('click', onBtnOpen);
// btn.addEventListener('click', onBtnClose);