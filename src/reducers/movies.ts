import { Reducer } from "redux";
interface Action {
    type: string;
    payload?: any;
}

export interface Movie{
    id: number,
    title: string,
    popularity:number,
    overview: string
}


interface MovieState {
    top: Movie[]
}

const initialState: MovieState = {
    top: [
        {id:1, title: "Inception", popularity: 98, overview: "Dream..."},
        {id:2, title: "Godfather", popularity: 97, overview: "Godfather..."},
        {id:3, title: "Batman", popularity: 96.5, overview: "Batman..."},
        {id:4, title: "The Godgather Part II", popularity: 98, overview: "The Godgather Part II..."}
    ]
}

const moviesReducer: Reducer<MovieState, Action> = (state, action)=>{
return initialState;
}

export default moviesReducer;