import React, {useEffect, useState} from 'react';

function Count({getCount}) {
    let [count,setCount]=useState(0);
    useEffect(()=>{
        setCount(getCount())
        console.log("updating count")
    },[getCount])

    return (
        <div>{count}</div>
    );
}

export default Count;