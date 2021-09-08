

const displayComments = (comments) => {
    const loadedComment = document.createElement('ul');
    loadedComment.classList.add('list-group', 'table-dark');
   
    comments.forEach((comment) => {
       loadedComment.innerHTML += `
         <li class="list-group-item bg-dark">
           <p class="text-white">${comment.username} (${comment.creation_date})</p>
           <span class="text-white">${comment.comment}</span>
         </li>
       `;
    })

   return loadedComment;
}


export default displayComments;