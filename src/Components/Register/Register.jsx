import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Joi from "joi";

function Register(props) {
    const [user,setUser]=useState({
        first_name:'',
        last_name:'',
        age:0,
        email:'',
        password:''
    });
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
    async function sendRegistrationDataToApi() {
        let url = ``;
        //let {data} = await axios.post(url, user);
        let data={message:"success"}
        //console.log(data);
        if (data.message==="success"){
            //login|Home
            setIsLoading(false);
            navigate("/login");
        }else{
            setError(data.message);
            setIsLoading(false);
        }
    }
    function submitRegisterForm(e){
        setIsLoading(true);
        e.preventDefault(); //to avoid the reload from the form submission
        let validation=validateRegistrationForm();
        if (validation.error){  //the validation has returned an error
            setIsLoading(false);
            setErrorList(validation.error.details);
        }else {
            setTimeout(function () {sendRegistrationDataToApi().then()}, 2000);   // we can do that to see the spinner
            //sendRegistrationDataToApi().then();
        }
    }
    function validateRegistrationForm(){
        let scheme =Joi.object({
            first_name:Joi.string().min(3).max(10).required(),
            last_name:Joi.string().min(3).max(10).required(),
            age:Joi.number().min(16).max(80).required(),
            email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
            password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/).required()// must start with a capital
        })
        let validation=scheme.validate(user,{abortEarly:false});
        console.log(validation)
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
        <form onSubmit={submitRegisterForm}>
            <label htmlFor="first_name">first name : </label>
            <input onChange={getUserData} className="form-control my-input my-2" type="text" id="first_name" name="first_name"/>
            <label htmlFor="last_name">last name : </label>
            <input onChange={getUserData} className="form-control my-input my-2" type="text" id="last_name" name="last_name"/>
            <label htmlFor="age">age : </label>
            <input onChange={getUserData} className="form-control my-input my-2" type="number" id="age" name="age"/>
            <label htmlFor="age">email : </label>
            <input onChange={getUserData} className="form-control my-input my-2" type="email" id="email" name="email"/>
            <label htmlFor="password">password : </label>
            <input onChange={getUserData} className="form-control my-input my-2" type="password" id="password" name="password"/>
            <button type="submit" className="btn btn-info" >
                {isLoading ===true ? <i className="fas fa-spinner fa-spin"></i>:'Register'}
            </button>
        </form>
        </>);
}

export default Register;