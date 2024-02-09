import {createContext, useState} from "react";
import {jwtDecode} from "jwt-decode";

export  const AuthenContext =createContext(null);
export default function AuthenContextProvider(props) {
    let [userData,setUserData]=useState(null);
    async function saveUserData() {
        let encodedToken =localStorage.getItem('userToken');
        let decodedToken;
        //decodedToken =jwtDecode(encodedToken);
        //setUserData(decodedToken);
        await setUserData({first_name:"mohamed",last_name:"el fadili",age:21,email:"user22@gmail.com"}) //testing
        console.log("userData= "+userData);
    }

    return <AuthenContext.Provider value={{userData,setUserData,saveUserData}}>
        {props.children}
    </AuthenContext.Provider>
}