import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionJapanese = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="https://languageproficiencybackend.onrender.com/japaneseSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionJapanese