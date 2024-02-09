import React, {useContext} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {AuthenContext} from "../../Context/AuthenContext";

function Layout() {
    let {setUserData} =useContext(AuthenContext);
    let navigate =useNavigate();
    function logout(){
        localStorage.removeItem("userToken");
        setUserData(null);
        navigate("/login")
    }
    return (<>
            <Navbar logout={logout}/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
    </>
    );
}

export default Layout;