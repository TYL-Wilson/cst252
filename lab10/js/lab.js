//Lab 10 JS
var input = prompt("")

const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Hello') {
    button.value = 'Goodbye, ';
    paragraph.textContent = input;
  } else {
    button.value = 'Hello';
    paragraph.textContent = input;
  }
}

// source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button
