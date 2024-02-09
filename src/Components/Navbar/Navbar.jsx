import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthenContext} from "../../Context/AuthenContext";

function Navbar({logout}) {
    let {userData} =useContext(AuthenContext);
    return (
        <nav className="p-2 d-flex flex-column flex-md-row justify-content-between">
            <div className="left-nav flex-column flex-md-row d-flex align-items-center">
                <h1 className="m-0 pe-3">Noxe</h1>
{userData?<ul className="list-unstyled d-flex  m-0 align-items-center">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li  className="px-2"><Link to="about">About</Link></li>
                    <li className="px-2"><Link to="movies">Movies</Link></li>
                    <li className="px-2"><Link to="tv">Tv</Link></li>
                    <li className="px-2"><Link to="people">People</Link></li>
                </ul>:''}

            </div>
            <div className="right-nav flex-column flex-md-row d-flex align-items-center">
                <div className="social-media">
                    <i className="fab mx-1 fa-facebook"></i>
                    <i className="fab mx-1 fa-instagram"></i>
                    <i className="fab mx-1 fa-twitter"></i>
                    <i className="fab mx-1 fa-youtube"></i>

                </div>
                <ul className="list-unstyled flex-column flex-md-row d-flex  m-0 align-items-center">
                    {
                        userData? <>
                            <li className="px-2"><Link to="profile">Profile</Link></li>
                            <li className="px-2 cursor-pointor" onClick={logout}><span >LogOut</span></li>
                        </>:<>
                            <li className="px-2"><Link to="login">Login</Link></li>
                            <li className="px-2"><Link to="register">Register</Link></li>
                        </>
                    }
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;