
import axios from "axios";

export default async function useFetch(mediaType) {
    let url = `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=ec42fc0dbd23576b091c75c5dc1c94b4`;
    let {data} = await axios.get(url);
    return data.results;
}