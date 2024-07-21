import React from 'react'
import logo from '../img/logo1.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
        <br /><br /><br /><br />
        <footer class="container-fluid text-white py-4" style={{backgroundColor:'#063212',justifyContent:"center"}}>
            <div class="row justify-content-center"> 
                <div class="col-md-3">
                    <Link to='/'><img style={{ height: '80px', width: '200px' }} src={logo} alt="" /></Link>
                    <ul class="list-unstyled">
                        <li><h4 class="connect-at">Connect At</h4></li> 
                        <li><h6>Address :- Paschim Vihar, Nangloi, New Delhi</h6></li>
                        <li><h6>Email :- manasvikumar108@gmail.com</h6></li>
                        <li><h6>Contact :- 9873577551</h6></li>
                    </ul>
                </div>
                <div class="col-md-3 " style={{textAlign:"center"}}>
                    <h3>Quick Links</h3>
                    <ul class="list-unstyled" >
                        <li><Link to="/" style={{color:"white", fontSize:"21px"}}>Home</Link></li>
                        <li><Link to="/languages" style={{color:"white", fontSize:"21px"}}>Languages</Link></li>
                        <li><Link to="/about" style={{color:"white", fontSize:"21px"}}>About</Link></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h3>Let's Stay Connected</h3>
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Enter your email.</label>
                            <input type="email" placeholder="xyz@gmail.com" class="form-control" id="email" aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" class="btn btn-outline-light">SUBMIT</button>
                    </form>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Footer