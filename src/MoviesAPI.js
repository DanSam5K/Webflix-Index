import renderHome from "./Home.js";

export const searchResult = async(search) => {
    let link = `https://api.tvmaze.com/search/shows?q=${search}`;
    await fetch (link)
    .then((response) => response.json())
    .then((data) => {
        return data;
    });
};

const allShows = async() => {
    let link = `https://api.tvmaze.com/shows`;
    await fetch (link)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        renderHome(data);
    });
};

export default allShows;
