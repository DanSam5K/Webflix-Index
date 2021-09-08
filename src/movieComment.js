 import createComments, { loadComments } from "./involvementAPI";
 
 const movieCommentForm = (item_id) => {
    const formInputs = document.createElement('div');

    const formUsername = document.createElement('input');
    formUsername.classList.add('form-control');
    formUsername.placeholder = `Username`;
    formUsername.maxLength = 30;
    formUsername.minLength = 4;

    const formComment = document.createElement('textarea');
    formComment.classList.add('form-control', 'my-2');
    formComment.placeholder = `Enter comment`;
    formComment.rows = 3;
    formComment.maxLength = 300;
    formComment.minLength = 4;

    const formBtn = document.createElement('button');
    formBtn.innerText = `Add comment`;
    formBtn.classList.add('btn', 'btn-primary');
    formBtn.type = `button`;

    formBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createComments(item_id, formUsername.value, formComment.value);
      formUsername.value = '';
      formComment.value = '';
    })

    formInputs.appendChild(formUsername);
    formInputs.appendChild(formComment);
    formInputs.appendChild(formBtn);
    return formInputs;
 }

export default movieCommentForm;