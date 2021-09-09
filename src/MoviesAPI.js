import renderHome from './Home.js';
import getLikes from './displayLikes.js';

export const searchResult = async (search) => {
  const link = `https://api.tvmaze.com/search/shows?q=${search}`;
  await fetch(link)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => {
      throw new Error('Failed to search shows');
    });
};

const allShows = async () => {
  const link = 'https://api.tvmaze.com/shows';
  await fetch(link)
    .then((response) => response.json())
    .then((data) => {
      renderHome(data);
    }).then(() => {
      getLikes();
    }).catch(() => {
      throw new Error('Failed to load tv shows');
    });
};

export default allShows;
