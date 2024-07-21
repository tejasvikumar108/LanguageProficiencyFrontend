import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionFrench = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="https://languageproficiencybackend.onrender.com/frenchErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionFrench