import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Units from '../../Components/Units/Units'
import Footer from '../../Components/Footer/Footer'

const Japanese = () => {
  return (
    <>
        <Navbar/>
        <Units language="Japanese" vPage="/japanese/vocab" suPage="/japanese/sentenceUnderstanding" scPage="/japanese/sentenceCompletion" ecPage="/japanese/errorCorrection" />
        <Footer/>
    </>
  )
}

export default Japanese