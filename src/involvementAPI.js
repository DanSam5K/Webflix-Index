import displayComments from "./displayComments.js";


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
   .then(() => {
        loadComments(item_id);
   })
   .catch(error => console.log(error));
};

export const loadComments = async (item_id) => {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/comments?item_id=${item_id}`, {
     method: 'GET',
     redirect: 'follow'
   })
   .then(response => response.json())
   .then(result => {
      displayComments(result);
  }).catch(error => {
    throw new Error('Failed to to load comments');
  });
};


export default createComments;