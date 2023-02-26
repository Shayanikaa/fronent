import React, { useState, useEffect } from 'react'
import "../styles/Navbar.css"
import homeImg from "../img/home3.jpg"
//import picture2 from "../img/picture2.jpg"
import ourjourneyimage from "../img/journey1.jpg"
import ourjourneyimage2 from "../img/journey2.jpg"
import plant2 from "../img/uiUx.jpg"
import plant1 from "../img/Android.jpg"
import plant3 from "../img/react.jpg"
import plnat4 from "../img/Mongo.jpg"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import {  faIndianRupeeSign  as rupeesign} from '@fortawesome/free-solid-svg-icons';
import chosseusImage from "../img/chooseus.jpg"

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }, []);


    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setLoggedIn(false);
        navigate("/");
    }


  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">EduSpehere</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item px-2 active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item px-2 active">
        <a className="nav-link" href="/products">Courses</a>
      </li>
      <li className="nav-item px-2">
        <a className="nav-link active" href="/about">About us</a>
      </li>
      <li className="nav-item px-2">
        <a className="nav-link active" href="/contact">Contact us</a>
      </li>
    </ul>
  </div>
  <div className="button-group">
  {!loggedIn ? (<>
                            <button className='btn1'> <a href="/signin">SIGN UP</a></button>
                            <button className='btn2'><a href="/login"></a> Login</button>
                        </>
                        ) : (<button className='mysignin' onClick={handleLogout}>LOG OUT</button>)}
    </div>
</nav>
<div className="body">
    <div className="main-pictures">
    <div className="picture1">
        <img src={homeImg} alt="" />
    </div>
    <div className="headings">
        <h1>Anytime Anywhere Learn
On your Schedule
        </h1>
    </div>
    <div className="text-part">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam, alias, cumque vel magni autem quis qui, harum nesciunt voluptatum velit molestiae fuga iste labore?</p>
    </div>
    <div className="picture2">
        <img src={homeImg} alt="" />
    </div>

    <div className="headings-button">
        <button>Get Started</button>
    </div>
    </div>
    <div className="ourJourney-part">
      <div className="picture-part1">
        <img src={ourjourneyimage} alt="" />
      </div>
     <div className="picture-part2">
        <img src={ourjourneyimage2} alt="" />
      </div>
      <div className="ourjourney-heading">
        <h1>Our Journey</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque consectetur <br/> id dolore nostrum incidunt amet doloribus quaerat quasi voluptatum.</p>
        <br />
        <button> <a href="https://linktr.ee/edusphere">Read More</a></button>
      </div>
     </div>
     <div className="coleection-part">
      <h1>Choose your desired from our collection</h1>
      <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={plant1} alt="Card image cap"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>Android App Development <br /><span><FontAwesomeIcon icon={rupeesign} />3400.00</span></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={plant2} alt="Card image cap"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>Ui/Ux Design <br /><span><FontAwesomeIcon icon={rupeesign} />2400.00</span></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={plant3} alt="Card image cap"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>React Js Course<br /><span><FontAwesomeIcon icon={rupeesign} />4400.00</span></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={plnat4} alt="Card image cap"/>
    <button className="wishlist-button">
        <FontAwesomeIcon icon={solidHeart} />
      </button>
    <div className='product-price-p'>
    <p>MongoDb Course <br /><span><FontAwesomeIcon icon={rupeesign} />5400.00</span></p>
    </div>
  </div>
</div>
<button className='shop-now-button'><a href="/products"> Shop all</a></button>

     </div>
     <div className='chooseus-part'>
      <div className='imagepart'> 
      <img src={chosseusImage} alt="" />
      </div>
      <div className='textpart'>
        <h1>Why Shop With Us?</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Incidunt quisquam tenetur tempore sint dolores architecto. <br /> Officia, et, error cumque doloribus omnis cupiditate porro nisi nemo quis <br /> doloremque id nihil consequuntur rem reprehenderit maiores iure odio vero.</p>
        <br />
        <div className='ordered-list'>
         <div className='numbers'>
          <h5><b>01.</b></h5>
         </div>
          <div className='points'>
            <h3>Free</h3>
            <p>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.</p>
          </div>
        </div>
        <br />
        <div className='ordered-list'>
         <div className='numbers'>
          <h5><b>02.</b></h5>
         </div>
          <div className='points'>
            <h3>Free</h3>
            <p>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
     </div>
     <div className='footer'>
        <div className='footer-part1'>
          <h3>Newsletter</h3>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='email-box'>
      <input type="text" className="email" placeholder="Enter your email"/>
      <button type="submit" className="emailButton">Subscribe
     </button>
          </div>

        </div>
        <div className='footer-part2'>
          <h4>Navigation</h4>
          <br />
          <div className='ul-items'>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className='footer-part3'>
          <h4>About us</h4>
          <br />
          <div className='ul-items'>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Addresses</li>
            </ul>
          </div>

        </div>
        <div className='footer-part4'>
          <h4>Help</h4>
          <br />
          <div className='ul-items'>
            <ul>
              <li>Customer Servics</li>
              <li>FAQ</li>
              <li>We are hiring</li>
            </ul>
          </div>

        </div>
     </div>
</div>
   </>
  )
}

export default Navbar