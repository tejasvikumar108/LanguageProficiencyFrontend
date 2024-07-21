import React from 'react'
import SentenceUnderstanding from '../../Components/SentenceUnderstanding/SentenceUnderstanding'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceUnderstandingTamil = () => {
  return (
    <>
      <Navbar/>
      <SentenceUnderstanding suApi="https://languageproficiencybackend.onrender.com/tamilSentenceUnderstanding" />
    </>
  )
}

export default SentenceUnderstandingTamil