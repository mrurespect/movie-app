import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import useFetch from "../../Hooks/useFetch";

let initialState ={trendingMedia:[]}
export let getMedia = createAsyncThunk("peoples/getTrending",async (mediaType)=>{
    return useFetch(mediaType);
})
let peopleSlice =createSlice({
    name:"people",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getMedia.fulfilled,(state,action)=>{
            state.trendingMedia=action.payload;
        })
    }

})
export let peopleReducer =peopleSlice.reducer;