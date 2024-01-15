import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./Slice/MoviesSlice";
import {tvReducer} from "./Slice/TvSlice";
import {peopleReducer} from "./Slice/PeopleSlice";

let store =configureStore({
    reducer:{
        movie:movieReducer,
        tv:tvReducer,
        people:peopleReducer
    }
})
export default store;