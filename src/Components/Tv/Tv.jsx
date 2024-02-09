import React, {useEffect} from 'react';
import Mediaitem from "../Mediaitem/Mediaitem";
import {useDispatch, useSelector} from "react-redux";
import {getMedia} from "../../Redux/Slice/TvSlice";

function Tv({to}) {
    //let {trendingTv} =useContext(MediaContext);
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch( getMedia("tv"))
    },[])
    let trendingTv=useSelector((state)=>state.tv.trendingMedia)

    return (
        trendingTv?<>
            <div className="row  py-5 text-center">
            <div className="col-md-4 d-flex align-items-center">
                <div>
                    <div className="brdr w-25 mb-3"></div>
                    <h2 className="h5">Trending Tv <br/> To watch Right Now</h2>
                    <p className="py-2 text-muted">most watched tv To watch Right Now</p>
                    <div className="brdr w-100 mt-3"></div>
                </div>
            </div>
            {
                trendingTv&&trendingTv.slice(0,-1&&to).map((item,index)=><Mediaitem key={index} item={item}/>)
            }
        </div>
        </>:<div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-spinner fa-spin fa-3x"></i>
            </div>
    );
}

export default Tv;