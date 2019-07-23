'use strict';

const INPUT_BUTTON_TYPES = ['button', 'submit', 'reset'];
const BUTTON_TAG_NAME = 'button';

function showFormValue(event) {
  event.preventDefault();

  const { target: form } = event;

  const formValue = [...form.elements]
    .filter(({ TAG_NAME, type }) => {
      return TAG_NAME !== BUTTON_TAG_NAME && !INPUT_BUTTON_TYPES.includes(type);
    })
    .reduce((acc, { value, name }) => ({ ...acc, [name]: value }), {});

  window.alert(
    `Form name: ${form.name}\nForm value: ${JSON.stringify(formValue, null, 4)}`
  );
}

window.addEventListener('load', () => {
  document.querySelector('form').addEventListener('submit', showFormValue);
});
