const displayComments = (comments) => {
  const loadCommentsContainer = document.getElementById('loadCommentsContainer');
  loadCommentsContainer.innerHTML = ``;
  const loadedComment = document.createElement('ul');
  if (Array.isArray(comments)) {
    
    loadedComment.classList.add('list-group', 'table-dark');
    
    comments.forEach((comment) => {
        loadedComment.innerHTML += `
          <li class="list-group-item bg-dark">
            <p class="text-white">${comment.username} (${comment.creation_date})</p>
            <span class="text-white">${comment.comment}</span>
          </li>
        `;
    })
  } else {
    loadedComment.innerHTML += `<p class="text-white"> No comments </p>`;
  }

  loadCommentsContainer.appendChild(loadedComment);
}


export default displayComments;