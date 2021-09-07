const mainContainer = document.getElementById('main');

const renderHome = (movies) => {
    mainContainer.innerHTML = ``;
    const allMoviesContainer = document.createElement('div');
    allMoviesContainer.classList.add('w-100', 'row', 'm-0', 'p-0');
    mainContainer.appendChild(allMoviesContainer);
    
    movies.forEach(movie => {
        const movieSeparator = document.createElement('div');
        movieSeparator.classList.add('col-3', 'm-0', 'p-2');
        allMoviesContainer.appendChild(movieSeparator);

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('w-100', 'border', 
        'rounded', 'shadow', 'movieContainer');
        movieSeparator.appendChild(movieContainer);

        movieContainer.innerHTML = `<p>${movie.name}</p>`;
    });
   
};

export default renderHome;




