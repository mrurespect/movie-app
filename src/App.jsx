import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import People from "./Components/People/People";
import Tv from "./Components/Tv/Tv";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import {Offline} from 'react-detect-offline'
import NotFound from "./Components/NotFound/NotFound";
import MediaContexProvider from "./Context/MediaContext";
import {AuthenContext} from "./Context/AuthenContext";
import store from "./Redux/Store";
import {Provider} from "react-redux";
function App() {
    let {userData,saveUserData} =useContext(AuthenContext);
    useEffect(()=>{
        if (localStorage.getItem("userToken")!==null){
            saveUserData().then();
        }
    },[])
    useEffect(()=>{console.log("userData updated "+userData)},[userData])

    let routers =createBrowserRouter([
        {path:"/" ,element:<Layout /> , children:[
                {index:true ,  element:<ProtectedRoute><Home/></ProtectedRoute>},
                {path:"about", element:<ProtectedRoute><About/></ProtectedRoute>},
                {path:"movies" ,  element:<ProtectedRoute><Movies/></ProtectedRoute>},
                {path:"people" , element:<ProtectedRoute><People/></ProtectedRoute>},
                {path:"tv" ,  element:<ProtectedRoute><Tv/></ProtectedRoute>},
                {path:"profile" ,element:<ProtectedRoute><Profile /></ProtectedRoute>},
                {path:"itemdetails/:id/:media_type",element:<ProtectedRoute><ItemDetails/></ProtectedRoute>},
                {path:"login" , element:<Login/>},
                {path:"register" , element:<Register/>},
                {path:"*",element:<NotFound/>}
            ]}
    ])

  return (<>
      <div>
          <Offline ><div className="offline">You're offline Check your connection</div></Offline>
      </div>
      <Provider store={store}>
          <MediaContexProvider>
              <RouterProvider  router={routers}/>
          </MediaContexProvider>
      </Provider>
  </>);
}

export default App;
