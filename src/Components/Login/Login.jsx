import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Joi from "joi";
import {AuthenContext} from "../../Context/AuthenContext";

function Login() {
    let {saveUserData} =useContext(AuthenContext);
    const [user,setUser]=useState({
        email:'',
        password:''
    })
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    let navigate =useNavigate();
    const [errorList,setErrorList]=useState([]);
    function getUserData(eventInfo){
        let myUSer ={...user}; //deep copy
        //  console.log(eventInfo);
        myUSer[eventInfo.target.name]=eventInfo.target.value ; // to set the entreded value of the input
        setUser(myUSer);
        // console.log(myUSer);
    }
    async function sendLoginDataToApi() {
        let url = ``;
        //let {data} = await axios.post(url, user);
        let data={message:"success",token:"cc"} //just for testing

        if (data.message==="success"){
            //login|Home
            setIsLoading(false);
            localStorage.setItem("userToken",data.token);
            saveUserData();
            navigate("/");
        }else{
            setError(data.message);
            setIsLoading(false);
        }
    }
    function submitLoginForm(e){
        setIsLoading(true);
        e.preventDefault(); //to avoid the reload from the form submission
        let validation=validateLoginForm();
        if (validation.error){  //the validation has returned an error
            setIsLoading(false);
            setErrorList(validation.error.details);
        }else {
            setTimeout(function () {sendLoginDataToApi()}, 2000);
            //sendLoginDataToApi().then();
        }
    }
    function validateLoginForm(){
        let scheme =Joi.object({
            email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
            password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/).required()// must start with a capital
        })
        let validation=scheme.validate(user,{abortEarly:false});
        console.log(validation);
        return validation ;
    }
    return (<>
        {errorList.map((err,index)=>{
            if(err.context.label ==='password'){
                return <div key={index} className="alert alert-danger my-2">password invalid</div>
            }
            else return <div key={index} className="alert alert-danger my-2">{err.message}</div>
        })}
        {error.length>0?<div className="alert alert-danger my-2">{error}</div>:''}
        <form onSubmit={submitLoginForm}>
            <label htmlFor="age">email : </label>
            <input onChange={getUserData} placeholder="enter : email@gmail.com" className="form-control my-input my-2" type="email" id="email" name="email"/>
            <label htmlFor="password">password : </label>
            <input onChange={getUserData} placeholder="enter : Hello" className="form-control my-input my-2" type="password" id="password" name="password"/>
            <button type="submit" className="btn btn-info" >
                {isLoading ===true ? <i className="fas fa-spinner fa-spin"></i>:'Login'}
            </button>
        </form>
    </>);
}
export default Login;