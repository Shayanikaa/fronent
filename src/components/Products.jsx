import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader as bookreader } from '@fortawesome/free-solid-svg-icons';
import { faStar as star } from '@fortawesome/free-solid-svg-icons';
import { faUser as iuser } from '@fortawesome/free-solid-svg-icons';

import { faMagnifyingGlass as magnifyingglass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping as cartshopping } from '@fortawesome/free-solid-svg-icons';

function Products() {
    const [user, setUser] = useState([]);
    const[count, setcount] = useState(30);
    const counter=()=>{
        setcount(count+1);
    }

    const fetchData = () => {
        return fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='prod-page'>
            <nav className="navbar-prod navbar-expand-lg navbar-dark ">
  <a className="navbar-brand" href="/">EduSpehere</a>
  
  <div className="buttons">
      <button className="mybtn1" type="submit"><a href="/signin"> <FontAwesomeIcon icon={magnifyingglass} /></a>
      </button>
      <button className="mybtns2" type="submit"><a href="/login"><FontAwesomeIcon icon={cartshopping} /></a></button>
    </div>
</nav>
<div className='product'>
   <div className='product-heading'>
         <h3>OUR COURSES</h3>
   </div>
   <div className='container'>
            <div className='row '>
                {user && user.length > 0 && user.map((userObj, index) => {

                    return (
                        <div key={index} className='col-4 col-md-3 my-4'>
                            <div className="card" style={{ width: '17rem' ,height:'30rem'}}>
                                <img className="card-img-top" key={index} src={userObj.image} alt="" />
                                <div className="card-body">
                                    <div className='text-card'>
                                    <h5 className="card-subtitle1" >{userObj.name}</h5>
                                    <h5 className="card-subtitle2 mb-2 text-muted">₹{userObj.price}</h5>
                                    </div>
                                    <p className='descrip'>Lorem ipsum dolor sit.</p>
                                    <br />
                                    <br />
                                    <div className='iconsimg'>
                      <FontAwesomeIcon icon={bookreader} className="bookreaderimg"/>Lesson
                      <FontAwesomeIcon icon={iuser} className="iuserimg"/>User
                      </div>
                
                      <div className='iconimg2'>
                      <button className="star" onClick={counter}><FontAwesomeIcon icon={star}/>{count}</button>
                      <FontAwesomeIcon icon={cartshopping} className="cart"/>
                      
                      </div>
                      <br />
                      <button className='enrolbtn'>Enrol Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
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
    )
}

export default Products