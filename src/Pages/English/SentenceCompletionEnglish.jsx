import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionEnglish = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="https://languageproficiencybackend.onrender.com/englishSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionEnglish