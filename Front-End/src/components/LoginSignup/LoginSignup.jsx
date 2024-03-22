import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

    const [action,setAction] = useState("Sign up");
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault
    //     axios.post('http://localhost:5000/register', {name, email, password})
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err))
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (action === "Sign up") {
            // Handle signup logic
            axios.post('http://localhost:5000/register', { name, email, password })
                .then(result =>{ 
                    console.log(result)
                    if(result.data === "Success"){
                        navigate('/')
                    }
                })
                .catch(err => console.log(err));
        } else {
            axios.post('http://localhost:5000/login', { email, password })
                .then(result => {
                    console.log(result)
                    if(result.data === "Success"){
                        navigate('/')
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
    <div className='container'>
        <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
                <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
            <div className='header'>
               <div className="text">{action}</div> 
               <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
                </div>}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email Id" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            </div>
            {action==="Sign up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-14 ml-48">
                     { action === "Sign up" ? "Sign Up" : "Login" }
            </button>

            </form>

            
            
        </div>
  );
};
export default LoginSignup;