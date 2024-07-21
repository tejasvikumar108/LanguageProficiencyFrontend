import React, { useState, useEffect } from 'react';
import logo from '../img/logo1.png'
import acc from './acc.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInStatus === 'true' && user) {
            setIsLoggedIn(true);
            setLoggedInUser(user);
        }
    }, []);
  return (
    <>
        <nav class="navbar navbar-expand-sm  navbar-dark flex-nowrap" style={{backgroundColor:'#063212','height':'80px',fontSize:'26px'}}>
            <div class="container">
                <Link to='/'><img style={{ height: '80px', width: '200px' }} src={logo} alt="" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav" >
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/languages">Languages</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    
                </ul>
                </div>
                <div>
                    {/* <Link to={"/signup"} class="justify-content-end btn btn-light rounded-pill-4 px-4 hover:bg-white hover:text-success" style={{color:'#063212',fontSize:'19px',fontWeight:'bolder'}} href="#">Login/Signup</Link> */}
                    {isLoggedIn ? (
                        <Link to={"/signup"} className="justify-content-end btn btn-light rounded-pill-4 px-4 hover:bg-white hover:text-success" style={{ color: 'black', backgroundColor: "white", fontSize: '19px', fontWeight: 'bolder' }}><img src={acc} alt="Account Icon" style={{ marginRight: '5px', height: '30px' }} />{loggedInUser.name}</Link>
                    ) : (
                        <Link to={"/signup"} className="justify-content-end btn btn-light rounded-pill-4 px-4 hover:bg-white hover:text-success" style={{ color: 'black',backgroundColor:"white" ,fontSize: '19px', fontWeight: 'bolder' }}>Login/Signup</Link>
                    )}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar