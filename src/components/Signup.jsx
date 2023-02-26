import {React, useState}  from 'react'
import '../styles/Signup.css'
import flower from "../img/signup.jpg"
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

  const navigate = useNavigate()

  const nav = () => {
    navigate('/login');
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const resonse = await fetch("http://localhost:5000/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
    const data = await resonse.json();

    if (data.status === "ok") {
      navigate("/login");
    }

    console.log(data);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className='main'>
      <div className="body1">
        <p className='signin'><b>Already a member?</b> <span className='hovering' style={{ cursor: 'pointer' }} onClick={nav}>Sign in</span></p>
        <h4>Sign Up</h4>
        <form onSubmit={registerUser}>
          <div className="myclass">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
            <input type="name" className="form-control" id="exampleInputPassword1" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="myclass">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
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
            <button type="submit" className="btn btn-dark">Create Account</button>
          </div>
          <div className="or">
            <p className='myhorizon'><span>or</span></p>
          </div>
          <div className="auth">
            <button type="submit" className=""><img src="https://img.icons8.com/color/100/null/google-logo.png" alt='' /> Sign up with Google</button>
            <button type="submit" className=""><img src="https://img.icons8.com/fluency/100/null/facebook.png" alt='' /> Sign up with Facebook</button>
          </div>
        </form>
      </div>
      <div className="body2">
        <img src={flower} alt="" />
      </div>
    </div>
  )
}