import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionTamil = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="https://languageproficiencybackend.onrender.com/tamilErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionTamil