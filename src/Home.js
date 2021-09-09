import displayMovie from './moviedetails.js';
import getLikes from './displayLikes.js';


const mainContainer = document.getElementById('main');


const renderHome = (movies) => {
    mainContainer.innerHTML = ``;

    const homeContainer =  document.createElement('div');
    homeContainer.classList.add('w-100', 'm-0', 
    'p-0', 'bg-mywhite', 'p-3');

    homeContainer.innerHTML += `<div class="d-flex flex-column align-items-center border-4 border-bottom my-2">
    <h1>Tv Shows</h1>
    <h2>${movies.length} Tv shows available!</h2>
    </div>`;
    mainContainer.appendChild(homeContainer)

    const allMoviesContainer = document.createElement('div');
    allMoviesContainer.classList.add('w-100', 'row', 'my-2', 
    'p-0', 'border-4', 'border-bottom');
    homeContainer.appendChild(allMoviesContainer);

    let page = 1;
    const renderMoviePage = (page) => {
        allMoviesContainer.innerHTML = ``;

        let end = page * 12;
        let start = end - 13; 
        movies.filter((item, index) => {
            if(index > start && index < end){
                return item;
            }
        }).forEach(movie => {
            const movieSeparator = document.createElement('div');
            movieSeparator.classList.add('col-3', 'm-0', 'p-2');
            allMoviesContainer.appendChild(movieSeparator);
    
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('w-100', 'border', 
            'rounded', 'shadow', 'movieContainer', 'position-relative');
            movieSeparator.appendChild(movieContainer);

            getLikes(movie.id, movieContainer);
    
            const movieProfile = document.createElement('a');
            movieProfile.href = '#';
            movieProfile.innerHTML = `<a><img class="movie-image" src="${movie.image.medium}"></a>`;
            movieContainer.appendChild(movieProfile);
            movieProfile.addEventListener('click', () => {
                displayMovie(movie);
            })
        });
    };

    renderMoviePage(page);

    const navigationContainer = document.createElement('nav');
    navigationContainer.classList.add('Page', 'navigation', 'my-3');
    homeContainer.appendChild(navigationContainer);

    const pagination = document.createElement('ul');
    pagination.classList.add('pagination', 'justify-content-center');
    navigationContainer.appendChild(pagination);

    const previousPage = document.createElement('li');
    previousPage.classList.add('page-item', 'disabled');
    previousPage.innerHTML = `<a href="#" class="page-link">Previous</a>`;
    pagination.appendChild(previousPage);

    previousPage.addEventListener('click', () => {
        if(page > 1) {
            page -= 1;
            renderMoviePage(page);
        }
    });

    for (let i = 1; i <  (movies.length/12); i++){
        const pageNum = document.createElement('li');
        if (page === i){
            pageNum.classList.add('active');
        }
        pageNum.classList.add('page-item');
        pageNum.innerHTML = `<a href="#" class="page-link">${i}</a>`;
        pagination.appendChild(pageNum);

        pageNum.addEventListener('click', () => {
            renderMoviePage(i);
            page = i;
        });
    }

    const nextPage = document.createElement('li');
    nextPage.classList.add('page-item');
    nextPage.innerHTML = `<a href="#" class="page-link">Next</a>`;
    pagination.appendChild(nextPage);

    nextPage.addEventListener('click', () => {
        if(page < (movies.length/12)) {
            page += 1;
            renderMoviePage(page);
        }
    });

    pagination.addEventListener('click', () => {
        pagination.querySelectorAll('a').forEach((item) => {
            if(item.textContent == page) {
                item.parentElement.classList.add('active');
                console.log(item.textContent);
            }else {
                item.parentElement.classList.remove('active');
            }

            if (item.textContent == 'Previous' && page > 1){
                item.parentElement.classList.remove('disabled');
            } else if(item.textContent == 'Previous' && page < 2) {
                item.parentElement.classList.add('disabled');
            }
            
            if (item.textContent == 'Next' && page > (movies.length / 12 - 2)){
                item.parentElement.classList.add('disabled');
            } else if (item.textContent == 'Next' && page < (movies.length / 12)){
                item.parentElement.classList.remove('disabled');
            } 
        });
    });
};

export default renderHome;




