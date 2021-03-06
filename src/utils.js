import { API_KEY } from "./constants";

export const getDiscoveryAPI = (params) => {
    // Pass a key value object, where the key is the api key, and the value is the value for the api
    // i.e. {page: 3, sort_by: 'primary_release_date.dsc'}
    let dynamicParams = '';
    for( let key in params) {
        dynamicParams += '&' + key + '=' + params[key];
    }
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_crew=138${dynamicParams}`)
        .then(res => res.json());
}
export const moviesToCards = (movies) => {
    return movies.map((item) => {
        return {
            movName: item.title,
            movImgSrc: item.poster_path,
            movRate: item.vote_average, 
            movYear: item.release_date , 
            movLink: item.id 
        }
    })
}