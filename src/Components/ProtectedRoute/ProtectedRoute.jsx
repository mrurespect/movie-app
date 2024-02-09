import React, {useContext} from 'react';
import Login from "../Login/Login";
import {AuthenContext} from "../../Context/AuthenContext";

function ProtectedRoute(props) {
    let {userData} =useContext(AuthenContext);
    if (userData === null){
        return <Login saveUserData={props.saveUserData}/>
    }
    else {
        return props.children ;
    }
}

export default ProtectedRoute;