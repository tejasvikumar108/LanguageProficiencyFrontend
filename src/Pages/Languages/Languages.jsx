import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './languages.css';
import hindi from '../../Components/img/hindi.png'
import english from '../../Components/img/eng1.png'
import japanese from '../../Components/img/japanese.png'
import french from '../../Components/img/french.png'
import spanish from '../../Components/img/spanish.png'
import tamil from '../../Components/img/tamil.png'
import LangCards from '../../Components/LangCards/LangCards';
import {Link} from "react-router-dom";
import Footer from '../../Components/Footer/Footer';



export default function Languages() {
  return (
    <>
    <Navbar/>

    <div>
    {/* <h2 id='learn'>I want to track my proficiency in...</h2> */}
    <h2 id='learn'>Languages in which you can track your proficiency.</h2>
    </div>

    <div className='languages'>
      <LangCards id="hindi" source={hindi} toVal="/hindi" value='Hindi'/>
      <LangCards id="english" source={english} toVal="/english" value='English'/>
      <LangCards id="japanese" source={japanese} toVal="/japanese" value='Japanese'/>
      {/* <LangCards id="tamil" source={tamil} toVal="/tamil" value='Tamil'/> */}
    </div>

    <div className='languages'>
      <LangCards id="french" source={french} toVal="/french" value='French'/>
      <LangCards id="spanish" source={spanish} toVal="/spanish" value='Spanish'/>
      <LangCards id="tamil" source={tamil} toVal="/tamil" value='Tamil'/>
      {/* <LangCards id="japanese" source={japanese} toVal="/japanese" value='Japanese'/> */}
    </div>
    
    
    <Footer/>
    </>
  )
}
