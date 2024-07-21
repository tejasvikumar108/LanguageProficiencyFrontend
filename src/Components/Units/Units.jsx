import React from 'react'
import './Units.css'
import { Link } from 'react-router-dom'


const Units = (props) => {
  return (
    <>
        <h2 id='chapter'>Evaluate Your {props.language} Language Skills</h2>
        <div id='units'>
            <div class="card w-75 mb-3 levels">
                <div class="card-body">
                    <h5 class="card-title">LEVEL 1. Vocabulary</h5>
                    <p class="card-text">
                        <li>Word Meaning: Matching words with their correct definitions or synonyms.</li>
                        <li>Contextual Usage: Understanding how words are used in different contexts.</li>
                    </p>             
                    <Link to={props.vPage}><button className="levelBtn" type="button">Start Test</button></Link>
                </div>
            </div>
            <div class="card w-75 mb-3 levels">
                <div class="card-body">
                    <h5 class="card-title">LEVEL 2. Sentence Understanding</h5>
                    <p class="card-text">
                        <li>Inference: Drawing conclusions or making inferences based on the information provided in the sentence or passage.</li>
                        <li>Context Clues: Using surrounding words or phrases to understand the meaning of unfamiliar words or phrases.</li>
                    </p>
                    <Link to={props.suPage}><button className="levelBtn" type="button">Start Test</button></Link>
                </div>
            </div>
            <div class="card w-75 mb-3 levels">
                <div class="card-body">
                    <h5 class="card-title">LEVEL 3. Sentence Completion</h5>
                    <p class="card-text">
                        <li>Cloze Test: Filling in the missing words or phrases within a sentence or passage.</li>
                        <li>Context-Based Completion: Filling in the blanks based on the context provided in the surrounding sentences or paragraphs.</li>
                    </p>
                    <Link to={props.scPage}><button className="levelBtn" type="button">Start Test</button></Link>
                </div>
            </div>
            <div class="card w-75 mb-3 levels">
                <div class="card-body">
                    <h5 class="card-title">LEVEL 4. Error Correction</h5>
                    <p class="card-text">
                        <li>Grammatical Errors: Identifying and correcting grammatical mistakes.</li>
                        <li>Spelling and Punctuation: Correcting spelling errors and punctuation mistakes in sentences or passages.</li>
                    </p>
                    <Link to={props.ecPage}><button className="levelBtn" type="button">Start Test</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Units