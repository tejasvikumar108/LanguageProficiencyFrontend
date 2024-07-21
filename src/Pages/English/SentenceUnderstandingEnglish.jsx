import React from 'react'
import SentenceUnderstanding from '../../Components/SentenceUnderstanding/SentenceUnderstanding'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceUnderstandingEnglish = () => {
  return (
    <>
      <Navbar/>
      <SentenceUnderstanding suApi="https://languageproficiencybackend.onrender.com/englishSentenceUnderstanding" />
    </>
  )
}

export default SentenceUnderstandingEnglish