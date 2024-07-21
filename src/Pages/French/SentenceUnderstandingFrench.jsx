import React from 'react'
import SentenceUnderstanding from '../../Components/SentenceUnderstanding/SentenceUnderstanding'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceUnderstandingFrench = () => {
  return (
    <>
      <Navbar/>
      <SentenceUnderstanding suApi="https://languageproficiencybackend.onrender.com/frenchSentenceUnderstanding" />
    </>
  )
}

export default SentenceUnderstandingFrench