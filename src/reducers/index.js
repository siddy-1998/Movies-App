export default function movies(state=[],action){
    if(action.type==='ACTION_MOVIES'){
        return action.movies;
    }

    return state;
}