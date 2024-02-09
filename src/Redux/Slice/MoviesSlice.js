import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import useFetch from "../../Hooks/useFetch";

let initialState={trendingMedia:[],loading:true}
export let getMedia=createAsyncThunk("movies/getTrending",async (mediaType)=>{
        return useFetch(mediaType);
    })
let moviesSlice=createSlice({
    name:"movie",
    initialState,
    extraReducers:(builder)=>{ //builder to handle the cases of request : three cases
        builder.addCase(getMedia.fulfilled,(state,action)=>{
            state.trendingMedia =action.payload;
        })
    }
})
export let movieReducer =moviesSlice.reducer;