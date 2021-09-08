import movieCommentForm from './movieComment';
import { loadComments } from './involvementAPI';

const mainContainer = document.getElementById('main');

const displayMovie = (movie) => {
   const bgContainer = document.createElement('div');
   bgContainer.classList.add('pop-bg');
   mainContainer.appendChild(bgContainer);

   const movieDetailsContainer = document.createElement('div');
   movieDetailsContainer.classList.add('pop-details', 'row', 'm-0');
   bgContainer.appendChild(movieDetailsContainer);

   const closeBtn = document.createElement('BUTTON');
   closeBtn.classList.add('btn', 'btn-outline-danger', 'close-btn');
   closeBtn.textContent = `X`;
   movieDetailsContainer.appendChild(closeBtn)

   closeBtn.addEventListener('click', () => {
       mainContainer.removeChild(bgContainer);
   })
   const containerContent = document.createElement('div');
   containerContent.classList.add('col-6', 'p-1');
   movieDetailsContainer.appendChild(containerContent);

   const movieImage = document.createElement('img');
   movieImage.classList.add('rounded', 'pop-image');
   movieImage.src = movie.image.original;
   containerContent.appendChild(movieImage);

   const movieContent= document.createElement('div');
   movieContent.classList.add('w-100', 'text-white', );
   movieContent.innerHTML = `
   <h4>${movie.name}</h4>
   <ul>
      <li>${movie.language}</li>
      <li>${movie.premiered}</li>
      <li><a href="${movie.officialSite}" target="_blank"> Official Site </a></li>
      <li>Ratings: ${movie.rating.average}</li>
      <li>${movie.summary}</li>
   </ul>
   `
   containerContent.appendChild(movieContent);

   const commentContainer = document.createElement('div');
   commentContainer.classList.add('col-6', 'p-1');
   movieDetailsContainer.appendChild(commentContainer);

   commentContainer.appendChild(movieCommentForm(movie.id));
//    commentContainer.innerHTML += loadComments(movie.id);
   console.log(loadComments(movie.id, commentContainer));
}

export default displayMovie;