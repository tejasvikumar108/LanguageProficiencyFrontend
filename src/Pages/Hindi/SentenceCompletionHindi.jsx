import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionHindi = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="https://languageproficiencybackend.onrender.com/hindiSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionHindi