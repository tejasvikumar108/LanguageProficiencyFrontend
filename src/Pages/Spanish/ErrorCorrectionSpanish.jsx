import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionSpanish = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="https://languageproficiencybackend.onrender.com/spanishErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionSpanish