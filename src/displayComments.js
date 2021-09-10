const displayComments = (comments) => {
  const loadCommentsContainer = document.getElementById('loadCommentsContainer');
  loadCommentsContainer.innerHTML = '';
  const loadedComment = document.createElement('ul');
  if (Array.isArray(comments)) {
    loadedComment.classList.add('list-group', 'list-group-comments');
    loadedComment.innerHTML += `
    <li class="list-group-item"><p class="text-white text-center w-100 m-0">${comments.length} : Comments </p></li>
    `;
    comments.forEach((comment) => {
      loadedComment.innerHTML += `
            <li class="list-group-item">
            <p class="text-white">${comment.username} (${comment.creation_date})</p>
            <span class="text-white">${comment.comment}</span>
          </li>
        `;
    });
  } else {
    loadedComment.innerHTML += '<li class="list-group-item bg-dark m-0"><p class="text-white text-center w-100 m-0"> 0 : Comments </p></li>';
  }

  loadCommentsContainer.appendChild(loadedComment);
};

export default displayComments;