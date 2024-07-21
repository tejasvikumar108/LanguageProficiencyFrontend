import React from 'react'
import SentenceUnderstanding from '../../Components/SentenceUnderstanding/SentenceUnderstanding'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceUnderstandingSpanish = () => {
  return (
    <>
      <Navbar/>
      <SentenceUnderstanding suApi="https://languageproficiencybackend.onrender.com/spanishSentenceUnderstanding" />
    </>
  )
}

export default SentenceUnderstandingSpanish