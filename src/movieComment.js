import createComments from './involvementAPI.js';

const movieCommentForm = (itemId) => {
  const formInputs = document.createElement('div');

  const formUsername = document.createElement('input');
  formUsername.classList.add('form-control');
  formUsername.placeholder = 'Username';
  formUsername.maxLength = 30;
  formUsername.minLength = 4;
  formInputs.appendChild(formUsername);

  const formComment = document.createElement('textarea');
  formComment.classList.add('form-control', 'my-2');
  formComment.placeholder = 'Enter comment';
  formComment.rows = 3;
  formComment.maxLength = 300;
  formComment.minLength = 4;
  formInputs.appendChild(formComment);

  const formBtn = document.createElement('button');
  formBtn.innerText = 'Add comment';
  formBtn.classList.add('btn', 'btn-primary');
  formBtn.type = 'button';
  formInputs.appendChild(formBtn);

  formBtn.addEventListener('click', () => {
    createComments(itemId, formUsername.value, formComment.value);
    formUsername.value = '';
    formComment.value = '';
  });

  return formInputs;
};

export default movieCommentForm;