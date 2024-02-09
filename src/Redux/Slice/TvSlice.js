import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import useFetch from "../../Hooks/useFetch";

let initialState={trendingMedia:[],loading:true}
export let getMedia=createAsyncThunk("tv/getTrending",async (mediaType)=>{
    return useFetch(mediaType);
})
let tvSlice=createSlice({
    name:"tv",
    initialState,
    extraReducers:(builder)=>{ //builder to handle the cases of request : three cases
        builder.addCase(getMedia.fulfilled,(state,action)=>{
            state.trendingMedia =action.payload;
        })

        //builder.addCase(getTrending.pending) //data not comes yet : we can return the spinner
        //builder.addCase(getTrending.rejected)   //theres a pb on the api : we can show an error
    }
})
export let tvReducer =tvSlice.reducer;