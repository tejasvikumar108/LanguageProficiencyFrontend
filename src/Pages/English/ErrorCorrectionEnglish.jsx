import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionEnglish = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="https://languageproficiencybackend.onrender.com/englishErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionEnglish