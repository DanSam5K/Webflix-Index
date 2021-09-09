export const createLikes = async (item_id) => {
  await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes", {
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({
       item_id: item_id
   }),
   redirect: 'follow'
 })
 .then(response => console.log(response.text()))
 .catch(error => Error('error', error));
};


export const displayLikes = (item_id, allLikes) =>  {
    let likesCount = allLikes.find(item => item.item_id == item_id);
    if (likesCount == null){
        likesCount = {likes: 0};
    }

    const likeContainer = document.createElement('div');
    likeContainer.classList.add('position-absolute', 'd-flex',
    'flex-row', 'bottom-0', 'end-0', 'bg-dark', 'p-2',
    'like-container');

    const counter = document.createElement('input');
    counter.type = 'hidden';
    counter.id = item_id;
    counter.value = likesCount.likes;
    likeContainer.append(counter);

    
    const likeLength = document.createElement('p');
    likeLength.classList.add('text-white', 'm-1', 'fs-3');
    likeLength.textContent = `Likes ${likesCount.likes}`;
    likeContainer.appendChild(likeLength);  

    const likes = document.createElement('button');
    likes.classList.add('like-button');
    likes.innerHTML = `<i class="fas fa-heart fs-2 text-white"></i>`;
    likeContainer.appendChild(likes);

    likes.addEventListener('click', () => {
        createLikes(item_id);
        const counterU = document.getElementById(item_id);
        counterU.value = parseInt(counterU.value) + 1;
        likeLength.textContent = `Likes ${counterU.value}`;
    });

    return likeContainer;

};

const getLikes = async (item_id, movieContainer) => {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes`, {
    method: 'GET',
    redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => {
        movieContainer.appendChild(displayLikes(item_id, result));
    });
};

export default getLikes;