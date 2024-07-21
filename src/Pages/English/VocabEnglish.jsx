import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Vocab from '../../Components/Vocab/Vocab'

const VocabEnglish = () => {
  return (
    <>
      <Navbar/>
      <Vocab vApi="https://languageproficiencybackend.onrender.com/englishVocab" />
    </>
  )
}

export default VocabEnglish