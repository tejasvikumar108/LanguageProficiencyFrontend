import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionTamil = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="https://languageproficiencybackend.onrender.com/tamilSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionTamil