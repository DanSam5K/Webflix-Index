import displayComments from "./displayComments";


const createComments = async (item_id, username, comment) => {
    await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/comments", {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
         item_id: item_id,
         username: username,
         comment: comment
     }),
     redirect: 'follow'
   })
   .then(response => response.text())
   .catch(error => Error('error', error));
};

export const loadComments = async (item_id, container) => {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/comments?item_id=${item_id}`, {
     method: 'GET',
     redirect: 'follow'
   })
   .then(response => response.json())
   .then(result => {
       container.innerHTML += displayComments(result).outerHTML;
  })
   .catch(error => {
       container.innerHTML += `<p class="text-white"> No comments </p>`;
   });
};

export default createComments;