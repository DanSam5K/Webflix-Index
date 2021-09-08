const mainContainer = document.getElementById('main');

const displayMovie = (movie) => {
   const bgContainer = document.createElement('div');
   bgContainer.classList.add('pop-bg');
   mainContainer.appendChild(bgContainer);

   const movieDetailsContainer = document.createElement('div');
   movieDetailsContainer.classList.add('pop-details');
   bgContainer.appendChild(movieDetailsContainer);

   const closeBtn = document.createElement('BUTTON');
   closeBtn.classList.add('btn', 'btn-outline-danger', 'close-btn');
   closeBtn.textContent = `X`;
   movieDetailsContainer.appendChild(closeBtn)

   closeBtn.addEventListener('click', () => {
       mainContainer.removeChild(bgContainer);
   })
}
export default displayMovie;