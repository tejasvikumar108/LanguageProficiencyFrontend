import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Units from '../../Components/Units/Units'
import Footer from '../../Components/Footer/Footer'

const Tamil = () => {
  return (
    <>
        <Navbar/>
        <Units language="Tamil" vPage="/tamil/vocab" suPage="/tamil/sentenceUnderstanding" scPage="/tamil/sentenceCompletion" ecPage="/tamil/errorCorrection" />
        <Footer/>
    </>
  )
}

export default Tamil