import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Units from '../../Components/Units/Units'
import Footer from '../../Components/Footer/Footer'

const English = () => {
  return (
    <>
        <Navbar/>
        <Units language="English" vPage="/english/vocab" suPage="/english/sentenceUnderstanding" scPage="/english/sentenceCompletion" ecPage="/english/errorCorrection" />
        <Footer/>
    </>
  )
}

export default English