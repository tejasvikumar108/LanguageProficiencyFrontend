import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Vocab from '../../Components/Vocab/Vocab'
import Footer from '../../Components/Footer/Footer'

const VocabJapanese = () => {
  return (
    <>
      <Navbar/>
      <Vocab vApi="https://languageproficiencybackend.onrender.com/japaneseVocab" />
    </>
  )
}

export default VocabJapanese