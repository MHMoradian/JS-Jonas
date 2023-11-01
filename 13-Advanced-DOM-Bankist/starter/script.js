'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  // Since open account is a link with href=#, wich makes the page to scroll back to the top
  // we can prevent that default behavior
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////
////////////////////////////////////////////////

// Selecting elements

// Selecting entire document of any web page
console.log(document.documentElement);

console.log(document.head);

console.log(document.body);

// selecting by querySelector
// returns first element that matches
// header is a class here
console.log(document.querySelector('.header'));
// returns all elements that match in a nodeList
console.log(document.querySelectorAll('.section'));
// section--1 is an id here
console.log(document.querySelector('#section--1'));

// selecting based on id
console.log(document.getElementById('section--1'));
console.log(document.querySelector('#section--1'));

// Selecting based on tag name
const allBtns = document.getElementsByTagName('button');
// This returns an HTMLCollection and not a nodeList
// the difference is that HTMLCollection is also called live collection
// Wich means if the DOM changes this collection is also immediately updated
console.log(allBtns);

// Selcting based on class name
// This returns an HTMLCollection and not a nodeList
console.log(document.getElementsByClassName('btn'));

// Creating and Inserting elements

// .insertAdjacantHTML

// createElement we pass in the tag name
// returns a DOM element
const message = document.createElement('div');
// At this point the element is not in the DOM yet
message.classList.add('cookie-message');
// Adding text to the element
message.textContent =
  'We use cookies for improved functionality and analytics.';
// Adding HTML to the element
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// Now we have to insert the element to the DOM
const header = document.querySelector('.header');
// Append and prepend will make message the child of header
header.prepend(message);
// header.append(message);
// Since an element in the DOM can not be at two position at the same time, it is only appended now
// If we want an element at two places, then we have to make a copy first (clone it)
// header.prepend(message.cloneNode(true));

// before and after make message a sibling to header
// header.before(message.cloneNode(true));
// header.after(message.cloneNode(true));

// Delete elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// we can log the styles we set ourselves manually (in line style) and get results but not the styles we did not set ourseleves
console.log(message.style.backgroundColor);
console.log(message.style.color);

// To get those styles
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Working with CSS custome properties (CSS variables)
// in CSS they are defined in document root wich is equivelant to document in JS
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// We can only access standard properties this way and not made up ones
console.log(logo.designer);
// so instead
console.log(logo.getAttribute('designer'));

// Setting attribute
logo.setAttribute('company', 'Bankist');

// Data attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();
