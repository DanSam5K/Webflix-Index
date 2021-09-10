/**
 * @jest-environment jsdom
 */

import fetchMock from 'fetch-mock';// eslint-disable-line no-eval
import allmovieMovies from './__mock__/allmoviesdataMock.js';
import mainContainer from './__mock__/mainMock.js';
import allShows from '../src/MoviesAPI.js';
import getLikes from '../src/displayLikes.js';

describe('Test Movie API', () => {
  beforeEach(() => {
    fetchMock
      .get('https://api.tvmaze.com/shows', JSON.stringify(allmovieMovies), { overwriteRoutes: false })
      .get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes', JSON.stringify([{ likes: 7, item_id: 500 }]), { overwriteRoutes: false });
  });

  test('Get all movies', () => {
    allShows().then(() => {
      const moviecount = mainContainer.querySelectorAll('img');
      return moviecount.length;
    }).then((moviecount) => {
      expect(moviecount).toBe(12);
    });
  });

  test('Get all likes for current pare movies', () => {
    getLikes().then(() => {
      const likescount = document.querySelectorAll('p');
      let count = 0;

      likescount.forEach((like) => {
        if (like.value === 7) {
          count += 1;
        }
      });
      expect(count).toBe(0);
    });
  });

  test('Get the count for all the movies', () => {
    const movieCount = document.getElementById('moviesTotalCount');
    expect(parseInt(movieCount.textContent, 10)).toBe(12);
  });
});