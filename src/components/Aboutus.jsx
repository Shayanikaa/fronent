import React from 'react'
import mybg from "../img/aboutus.jpg"
import "../styles/Aboutus.css"

export default function Aboutus() {
    return (
        <div className='mycontain'>
            <div className="bg">
                <img className='bgimg' src={mybg} alt="" />
            </div>
            <div className="innertxt">
                <h1><b>About Us</b></h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit maiores quas perspiciatis adipisci cupiditate obcaecati illo quasi? Maxime ex excepturi, ipsam, error harum vel mollitia cupiditate accusamus ullam illum rem laboriosam nobis consequatur est laudantium.
                </p>
                <button className='abtn'> <a href="https://linktr.ee/edusphere">Learn more</a></button>
            </div>
        </div>
    )
}