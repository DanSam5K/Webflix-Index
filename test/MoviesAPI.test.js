/**
 * @jest-environment jsdom
 */

import fetchMock from 'fetch-mock';
import allmovieMovies from './__mock__/allmoviesdataMock.js';
import mainContainer from './__mock__/mainMock.js';
import allShows from '../src/MoviesAPI.js';
import getLikes from '../src/displayLikes.js';

describe('Test Movie API', () => {
  beforeEach(() => {
    fetchMock.mockIf(/^https?:\/\/*$/, (req) => {
      if (req.url.endsWith('/shows')) {
        return JSON.stringify(allmovieMovies);
      } if (req.url.endsWith('/likes')) {
        return JSON.stringify([{ item_id: 1, likes: 20 }]);
      }
      return {
        status: 404,
        body: 'Not Found',
      };
    });
  });

  test('Get all movies', () => {
    allShows().then(() => {
      const moviecount = mainContainer.querySelectorAll('img');
      return moviecount.length;
    }).then((moviecount) => {
      expect(moviecount).toBe(12);
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(fetch).toHaveBeenCalledWith('https://api.tvmaze.com/shows');
    });
  });

  test('Get all likes for current pare movies', () => {
    getLikes().then(() => {
      const likescount = mainContainer.querySelectorAll('input');
      expect(likescount.length).toBe(1);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HfpxRPxUzIbQwHSCpLw/likes');
    });
  });
});