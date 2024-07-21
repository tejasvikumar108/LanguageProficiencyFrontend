import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Units from '../../Components/Units/Units'
import Footer from '../../Components/Footer/Footer'

const Spanish = () => {
  return (
    <>
        <Navbar/>
        <Units language="Spanish" vPage="/spanish/vocab" suPage="/spanish/sentenceUnderstanding" scPage="/spanish/sentenceCompletion" ecPage="/spanish/errorCorrection" />
        <Footer/>
    </>
  )
}

export default Spanish