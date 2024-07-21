import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import poster from './poster.jpeg'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <>
        <Navbar/>

        <div id='posterOuter'className='container'>
            <div id='poster'>
                <img src={poster} alt="" />
            </div>
            <div id='posterText'>
                <p>The free, fun, and effective way to test your language fluency!</p>
                <div class="d-grid gap-2 col-8 mx-auto">
                    <Link to={"/languages"}><button className="btn gStart" type="button">GET STARTED</button></Link>
                    <Link to="/login" ><button className="btn gAcc" type="button">I ALREADY HAVE AN ACCOUNT</button></Link>
                </div>
            </div>
        </div>

        <Footer/>



        

    </>
  )
}

export default Home