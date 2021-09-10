import displayMovie from './moviedetails.js';
import { displayLikes } from './displayLikes.js';

const mainContainer = document.getElementById('main');

const renderHome = (movies) => {
  mainContainer.innerHTML = '';

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('w-100', 'm-0',
    'p-0', 'bg-mywhite', 'p-3');

  homeContainer.innerHTML += `<div class="d-flex flex-column align-items-center border-4 border-bottom my-2">
    <h1>Tv Shows</h1>
    <div class="d-flex flex-row">
      <p id="moviesTotalCount" class="fs-2 mx-3">${movies.length}</p>
      <p class="fs-2">Tv shows available!</p>
    </div>
    </div>`;
  mainContainer.appendChild(homeContainer);

  const allMoviesContainer = document.createElement('div');
  allMoviesContainer.id = 'allMoviesContainer';
  allMoviesContainer.classList.add('w-100', 'row', 'my-2',
    'p-0', 'border-4', 'border-bottom');
  homeContainer.appendChild(allMoviesContainer);

  let page = 1;
  const renderMoviePage = (page) => {
    allMoviesContainer.innerHTML = '';

    const end = page * 12;
    const start = end - 13;
    movies.filter((item, index) => {
      if (index > start && index < end) {
        return item;
      }
      return 0;
    }).forEach((movie) => {
      const movieSeparator = document.createElement('div');
      movieSeparator.classList.add('col-6', 'col-md-3', 'm-0', 'p-2');
      allMoviesContainer.appendChild(movieSeparator);

      const movieContainer = document.createElement('div');
      movieContainer.classList.add('w-100', 'border',
        'rounded', 'shadow', 'movieContainer', 'position-relative');
      movieSeparator.appendChild(movieContainer);

      const movieId = document.createElement('input');
      movieId.type = 'hidden';
      movieId.value = movie.id;
      movieContainer.appendChild(movieId);

      const movieProfile = document.createElement('a');
      movieProfile.href = '#';
      movieProfile.innerHTML = `<a><img class="movie-image" src="${movie.image.medium}"></a>`;
      movieContainer.appendChild(movieProfile);
      movieProfile.addEventListener('click', () => {
        displayMovie(movie);
      });
    });
  };

  renderMoviePage(page);

  const navigationContainer = document.createElement('nav');
  navigationContainer.classList.add('Page', 'navigation', 'my-3');
  homeContainer.appendChild(navigationContainer);

  const pagination = document.createElement('ul');
  pagination.classList.add('pagination', 'd-flex', 'flex-wrap', 'justify-content-center');
  navigationContainer.appendChild(pagination);

  const previousPage = document.createElement('li');
  previousPage.classList.add('page-item', 'disabled');
  previousPage.innerHTML = '<a href="#" class="page-link">Previous</a>';
  pagination.appendChild(previousPage);

  previousPage.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      renderMoviePage(page);
      displayLikes();
    }
  });

  for (let i = 1; i < (movies.length / 12); i += 1) {
    const pageNum = document.createElement('li');
    if (page === i) {
      pageNum.classList.add('active');
    }
    pageNum.classList.add('page-item');
    pageNum.innerHTML = `<a href="#" class="page-link">${i}</a>`;
    pagination.appendChild(pageNum);
  }

  pagination.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A' && e.target.textContent !== 'Previous' && e.target.textContent !== 'Next') {
      renderMoviePage(e.target.textContent);
      displayLikes();
      page = parseInt(e.target.textContent, 10);
    }
  });

  const nextPage = document.createElement('li');
  nextPage.classList.add('page-item');
  nextPage.innerHTML = '<a href="#" class="page-link">Next</a>';
  pagination.appendChild(nextPage);

  nextPage.addEventListener('click', () => {
    if (page < (movies.length / 12)) {
      page += 1;
      renderMoviePage(page);
      displayLikes();
    }
  });

  pagination.addEventListener('click', () => {
    pagination.querySelectorAll('a').forEach((item) => {
      if (item.textContent === 'Previous' && page > 1) {
        item.parentElement.classList.remove('disabled');
      } else if (item.textContent === 'Previous' && page < 2) {
        item.parentElement.classList.add('disabled');
      }

      if (item.textContent === 'Next' && page > (movies.length / 12 - 2)) {
        item.parentElement.classList.add('disabled');
      } else if (item.textContent === 'Next' && page < (movies.length / 12)) {
        item.parentElement.classList.remove('disabled');
      }

      if (parseInt(item.textContent, 10) === page) {
        item.parentElement.classList.add('active');
      } else {
        item.parentElement.classList.remove('active');
      }
    });
  });
};

export default renderHome;
