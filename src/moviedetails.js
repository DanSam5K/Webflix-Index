import movieCommentForm from './movieComment.js';
import { loadComments } from './involvementAPI.js';

const mainContainer = document.getElementById('main');

const displayMovie = (movie) => {
   const bgContainer = document.createElement('div');
   bgContainer.classList.add('pop-bg');
   mainContainer.appendChild(bgContainer);

   const titleBtn = document.createElement('div');
   titleBtn.classList.add('w-100', 'bg-dark', 
   'm-0', 'p-2', 'position-relative', 'movie-banner');
   titleBtn.innerHTML = `<h2 class="text-white text-center my-1">${movie.name}</h2>`;
   bgContainer.appendChild(titleBtn);

   const movieDetailsContainer = document.createElement('div');
   movieDetailsContainer.classList.add('pop-details', 'row', 'm-0');
   bgContainer.appendChild(movieDetailsContainer);

   const closeBtn = document.createElement('BUTTON');
   closeBtn.classList.add('btn', 'btn-outline-danger', 'close-btn');
   closeBtn.textContent = `Close`;
   titleBtn.appendChild(closeBtn)

   closeBtn.addEventListener('click', () => {
       mainContainer.removeChild(bgContainer);
   })
   const containerContent = document.createElement('div');
   containerContent.classList.add('col-6', 'p-1', 'd-flex', 'flex-column', 'align-items-center');
   movieDetailsContainer.appendChild(containerContent);

   const movieImage = document.createElement('img');
   movieImage.classList.add('pop-image');
   movieImage.src = movie.image.original;
   containerContent.appendChild(movieImage);

   const movieContent= document.createElement('div');
   movieContent.classList.add('w-100', 'text-white', );
   movieContent.innerHTML = `
   <ul class="list-group p-3 movie-details fs-6">
      <li><span>${movie.summary}</span></li>
      <li class="d-flex flex-row justify-content-between"><p> Language: ${movie.language}</p> <p> Premiered: ${movie.premiered}</p></li>
      <li class="d-flex flex-row justify-content-between"><p>Ratings: ${movie.rating.average}</p> <a href="${movie.officialSite}" target="_blank" class="my-2"> Official Site </a></li>
   </ul>
   `
   containerContent.appendChild(movieContent);
   

   const commentContainer = document.createElement('div');
   commentContainer.classList.add('col-6', 'p-2');
   movieDetailsContainer.appendChild(commentContainer);

   commentContainer.appendChild(movieCommentForm(movie.id));

   const loadCommentsContainer = document.createElement('div');
   loadCommentsContainer.classList.add('my-2');
   loadCommentsContainer.id = 'loadCommentsContainer';
   commentContainer.appendChild(loadCommentsContainer);

   loadComments(movie.id);
}

export default displayMovie;