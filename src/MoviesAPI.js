import renderHome from './Home.js';
import getLikes from './displayLikes.js';

export const searchResult = async (search) => {
  const link = `https://api.tvmaze.com/search/shows?q=${search}`;
  await fetch(link)
    .then((response) => response.json())
    .then((data) => data);
};

const allShows = async () => {
  const link = 'https://api.tvmaze.com/shows';
  await fetch(link)
    .then((response) => response.json())
    .then((data) => {
      renderHome(data);
    }).then(() => {
      getLikes();
    });
};

export default allShows;
