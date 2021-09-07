import { allShows } from "./MoviesAPI.js";

class Movies {
    loadMovies() {
        this.list = allShows();
    }
}

const myMovies = new Movies;

export default myMovies;