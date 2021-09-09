let allLikes = [];

export const createLikes = async (itemId) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: itemId,
    }),
    redirect: 'follow',
  })
    .catch((error) => Error('error', error));
};

export const displayLikes = () => {
  const allMoviesContainer = document.getElementById('allMoviesContainer');
  allMoviesContainer.querySelectorAll('input').forEach((movie) => {
    let likesCount = 0;
    if (allLikes[movie.value]) {
      likesCount = allLikes[movie.value].likes;
    }

    const movieContainer = movie.parentNode;

    const likeContainer = document.createElement('div');
    likeContainer.id = 'likeContainer';
    likeContainer.classList.add('position-absolute', 'd-flex',
      'flex-row', 'bottom-0', 'end-0', 'bg-dark', 'p-2',
      'like-container');

    const counter = document.createElement('input');
    counter.type = 'hidden';
    counter.id = movie.value;
    counter.value = likesCount;
    likeContainer.append(counter);

    const likeLength = document.createElement('p');
    likeLength.classList.add('text-white', 'm-1', 'fs-3');
    likeLength.textContent = `Likes ${likesCount}`;
    likeContainer.appendChild(likeLength);

    const likes = document.createElement('button');
    likes.classList.add('like-button');
    likes.innerHTML = '<i class="fas fa-heart fs-2 text-white"></i>';
    likeContainer.appendChild(likes);

    likes.addEventListener('click', () => {
      createLikes(movie.value);
      const counterU = document.getElementById(movie.value);
      counterU.value = parseInt(counterU.value, 10) + 1;
      likeLength.textContent = `Likes ${counterU.value}`;
    });

    movieContainer.appendChild(likeContainer);
  });
};

const getLikes = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes', {
    method: 'GET',
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((result) => {
      allLikes = result;
      displayLikes();
    });
};

export default getLikes;