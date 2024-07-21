import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionSpanish = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="https://languageproficiencybackend.onrender.com/spanishSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionSpanish