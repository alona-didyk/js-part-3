'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  // console.log('button clicked');
  // The classList property returns the CSS classnames of an element
  // we dont use dot here, we use it only when selecting
  // we activate or deactivate sertain class
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// with document we are listening for event everywhere
// keyup happens when we lift finger off the keyword or the key
// keypress is fired continuosly as we keep finger on the key
// keydown is fired as soon as we just presspress down the key
// when the event happen we can have access to this event in the event handler
// e - js passing the event object to the function when event happen
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');

    closeModal();
  }
});
