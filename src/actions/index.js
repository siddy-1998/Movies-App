// {
//     type : 'ADD_MOVIES',
//     movies : [m1,m2,m3]
// }

//action type
export const ADD_MOVIES = 'ADD_MOVIES';

//action creator
export function addMovies(movies)
{
   return {
        type: ADD_MOVIES,
        movies
    }
};