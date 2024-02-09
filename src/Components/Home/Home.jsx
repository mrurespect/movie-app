import React from 'react';
import Tv from "../Tv/Tv";
import People from "../People/People";
import Movies from "../Movies/Movies";
import {Helmet} from "react-helmet";

function Home() {
    const max_items = 10 ;
    return (<>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        </Helmet>
        <Movies to={max_items}/>
        <Tv to={max_items}/>
        <People to={max_items}/>
    </>)
}

export default Home;