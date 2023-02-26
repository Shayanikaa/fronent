import React, { useState } from 'react'
import '../styles/Signup.css'
import flower from "../img/signup.jpg"
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const navigate = useNavigate()

    const nav = () => {
        navigate('/signin');
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(e) {
        e.preventDefault();
        const resonse = await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        const data = await resonse.json();
        if (data.user) {
            sessionStorage.setItem("token", data.user);
            navigate("/");
        }
        else {
            alert("Please check your email and password");
        }
        console.log(data);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='main'>
            <div className="body1">
                <p className='signin'><b>New here?</b> <span className='hovering' style={{ cursor: 'pointer' }} onClick={nav}>Create an account</span></p>
                <h4>Sign In</h4>
                <form onSubmit={loginUser}>
                    <div className="myclass">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="myclass">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control mypass" id="exampleInputPassword1" placeholder='6+ characters' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mycheckbox form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to all the statements included in the <u>terms of service</u></label>
                    </div>
                    <div className='mybtn'>
                        <button type="submit" className="btn btn-dark">Sign In</button>
                    </div>
                    <div className="or">
                        <p className='myhorizon'><span>or</span></p>
                    </div>
                    <div className="auth">
                        <button type="submit" className=""><img src="https://img.icons8.com/color/100/null/google-logo.png" alt='' /> Sign in with Google</button>
                        <button type="submit" className=""><img src="https://img.icons8.com/fluency/100/null/facebook.png" alt='' /> Sign in with Facebook</button>
                    </div>
                </form>
            </div>
            <div className="body2">
                <img src={flower} alt="" />
            </div>
        </div>
    )
}