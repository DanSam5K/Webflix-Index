import myLikes from "./constructor.js";

export const createLikes = async (item_id) => {
  await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes", {
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({
       item_id: item_id
   }),
   redirect: 'follow'
 })
 .then(response => response.text())
 .catch(error => Error('error', error));
};

export const displayLikes = (item_id) =>  {
    
    const likeContainer = document.createElement('div');
    likeContainer.classList.add('position-absolute', 'd-flex',
    'flex-row', 'bottom-0', 'end-0', 'bg-dark', 'p-2');

    const likeLength = document.createElement('p');
    likeLength.classList.add('text-white', 'm-1', 'fs-3');
    likeLength.textContent = `Likes ${myLikes.likes(item_id)}`;
    likeContainer.appendChild(likeLength);  

    const likes = document.createElement('button');
    likes.classList.add('like-button');
    likes.innerHTML = `<i class="fas fa-heart fs-2 text-white"></i>`;
    likeContainer.appendChild(likes);

    likes.addEventListener('click', () => {
        createLikes(item_id);
        item.value += 1;
    });

    return likeContainer;

};

const getLikes = async () => {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes`, {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => {
        myLikes.add(result);
    }).catch(error => {
        //some  error goes here
    });
};

export default getLikes;