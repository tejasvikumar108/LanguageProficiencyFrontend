import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Vocab from '../../Components/Vocab/Vocab'

const VocabHindi = () => {
  return (
    <>
      <Navbar/>
      <Vocab vApi="https://languageproficiencybackend.onrender.com/hindiVocab" />
    </>
  )
}

export default VocabHindi