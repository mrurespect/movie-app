import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";
import Movies from "../Movies/Movies";
import Tv from "../Tv/Tv";
import People from "../People/People";

function ItemDetails(props) {
    let {id,media_type} =useParams();
    let [item,setItemData]=useState(null);
   // console.log(allParams.id) ; //{id:"872585",media_type:"movie"
     let url = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=ec42fc0dbd23576b091c75c5dc1c94b4`;
     async function getItemsData(){
         let {data} =await axios.get(url);
         console.log(data) ;
         setItemData(data) ;
     }
     useEffect(()=>{
         getItemsData();
     },[])

    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{item&&(item.title||item.name)}</title>
            <meta name="description" content={item&&item.description}/>
        </Helmet>
        {item?<div className="row mt-3">
            <div className="col-md-3">
                {
                    item.poster_path?<img src={"https://image.tmdb.org/t/p/w500"+item.poster_path}  className="w-100" alt=""/>
                        :           <img src={"https://image.tmdb.org/t/p/w500"+item.profile_path}  className="w-100" alt=""/>
                }
            </div>
            <div className="col-md-9">
                <h3 className=" my-2">{item.title}{item.name}</h3>
                <i className="h5">{item.tagline}</i>
                <p className="py-2 ">{item.overview}{item.biography}</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                {item.homepage&&<h6> home page : <a target="_blank" href={item.homepage} className="text-primary">{item.homepage}</a></h6>}
                { (item.release_date || item.first_air_date) &&<h6>release date : {item.release_date}{item.first_air_date}</h6>}
                {item.birthday&&<h6>birthday : {item.birthday}</h6>}
                <h6>popularity : {item.popularity}</h6>

                {item.vote_average&&<h6>vote average :  {item.vote_average?.toFixed(1)}</h6>}
                {item.vote_count&&<h6>vote count :  {item.vote_count} </h6>}
            </div>
        </div>:<div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
        }

</> );
}

export default ItemDetails;