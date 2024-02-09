import {createContext, useEffect, useState} from "react";
import axios from "axios";

export let MediaContext =createContext(0);
export default function MediaContexProvider(props){
    const [trendingMovies,setTrendingMovies]=useState(null);
    const [trendingPeople,setTrendingPeople]=useState(null);
    const [trendingTv,setTrendingTv]=useState(null);

    async function getTrending(mediaType,callback){
        const apikey='' ; //add you api key
        let url = `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=`+apikey;
        let {data}=await axios.get(url) ;
        callback(data.results);
        console.log(data.results)
    }

    useEffect(()=>{
        getTrending("tv",setTrendingTv)
        getTrending("movie",setTrendingMovies);
        getTrending("person",setTrendingPeople);
    },[])

    return <MediaContext.Provider value={{trendingPeople,trendingTv,trendingMovies}}>
        {props.children}
    </MediaContext.Provider>
}