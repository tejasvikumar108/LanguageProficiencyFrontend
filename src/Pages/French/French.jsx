import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Units from '../../Components/Units/Units'
import Footer from '../../Components/Footer/Footer'

const French = () => {
  return (
    <>
        <Navbar/>
        <Units language="French" vPage="/french/vocab" suPage="/french/sentenceUnderstanding" scPage="/french/sentenceCompletion" ecPage="/french/errorCorrection" />
        <Footer/>
    </>
  )
}

export default French