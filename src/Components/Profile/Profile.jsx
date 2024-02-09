import React, {useContext} from 'react';
import {AuthenContext} from "../../Context/AuthenContext";

function Profile() {
    let {userData} =useContext(AuthenContext);
    let {first_name,last_name,age,email}=userData ||{};
    return (
        <>
            <h4>Name : {first_name} {last_name}</h4>
            <h4>Age : {age} </h4>
            <h4>email : {email} </h4>
        </>
    );
}

export default Profile;