import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Units from '../../Components/Units/Units'


const Hindi = () => {
  return (
    <>
        <Navbar/>

        <Units language="Hindi" vPage="/hindi/vocab" suPage="/hindi/sentenceUnderstanding" scPage="/hindi/sentenceCompletion" ecPage="/hindi/errorCorrection" />

        <Footer/>
    </>
  )
}

export default Hindi