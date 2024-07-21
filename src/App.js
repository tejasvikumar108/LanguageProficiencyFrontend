import './App.css';
import Languages from './Pages/Languages/Languages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hindi from './Pages/Hindi/Hindi';
import Home from './Pages/Home/Home';
import English from './Pages/English/English';
import Tamil from './Pages/Tamil/Tamil';
import French from './Pages/French/French';
import Spanish from './Pages/Spanish/Spanish';
import Japanese from './Pages/Japanese/Japanese';
import VocabHindi from './Pages/Hindi/VocabHindi';
import SentenceUnderstandingHindi from './Pages/Hindi/SentenceUnderstandingHindi';
import SentenceCompletionHindi from './Pages/Hindi/SentenceCompletionHindi';
import ErrorCorrectionHindi from './Pages/Hindi/ErrorCorrectionHindi';
import VocabEnglish from './Pages/English/VocabEnglish';
import SentenceUnderstandingEnglish from './Pages/English/SentenceUnderstandingEnglish';
import SentenceCompletionEnglish from './Pages/English/SentenceCompletionEnglish';
import ErrorCorrectionEnglish from './Pages/English/ErrorCorrectionEnglish';
import VocabJapanese from './Pages/Japanese/VocabJapanese';
import SentenceUnderstandingJapanese from './Pages/Japanese/SentenceUnderstandingJapanese';
import SentenceCompletionJapanese from './Pages/Japanese/SentenceCompletionJapanese';
import ErrorCorrectionJapanese from './Pages/Japanese/ErrorCorrectionJapanese';
import VocabFrench from './Pages/French/VocabFrench';
import SentenceUnderstandingFrench from './Pages/French/SentenceUnderstandingFrench';
import SentenceCompletionFrench from './Pages/French/SentenceCompletionFrench';
import ErrorCorrectionFrench from './Pages/French/ErrorCorrectionFrench';
import VocabSpanish from './Pages/Spanish/VocabSpanish';
import SentenceUnderstandingSpanish from './Pages/Spanish/SentenceUnderstandingSpanish';
import SentenceCompletionSpanish from './Pages/Spanish/SentenceCompletionSpanish';
import ErrorCorrectionSpanish from './Pages/Spanish/ErrorCorrectionSpanish';
import VocabTamil from './Pages/Tamil/VocabTamil';
import SentenceUnderstandingTamil from './Pages/Tamil/SentenceUnderstandingTamil';
import SentenceCompletionTamil from './Pages/Tamil/SentenceCompletionTamil';
import ErrorCorrectionTamil from './Pages/Tamil/ErrorCorrectionTamil';
import Signup from './Pages/LoginSignup/Signup';
import Login from './Pages/LoginSignup/Login';
import About from './Pages/About/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/" element={<Languages/>} /> */}
        <Route path="/languages" element={<Languages/>} />
        
        <Route path="/hindi" element={<Hindi/>} />
        <Route path="/hindi/vocab" element={<VocabHindi/>} />
        <Route path="/hindi/sentenceUnderstanding" element={<SentenceUnderstandingHindi/>} />
        <Route path="/hindi/sentenceCompletion" element={<SentenceCompletionHindi/>} />
        <Route path="/hindi/errorCorrection" element={<ErrorCorrectionHindi/>} />
         
        <Route path="/english" element={<English/>} />
        <Route path="/english/vocab" element={<VocabEnglish/>} />
        <Route path="/english/sentenceUnderstanding" element={<SentenceUnderstandingEnglish/>} />
        <Route path="/english/sentenceCompletion" element={<SentenceCompletionEnglish/>} />
        <Route path="/english/errorCorrection" element={<ErrorCorrectionEnglish/>} />

        <Route path="/japanese" element={<Japanese/>} />
        <Route path="/japanese/vocab" element={<VocabJapanese/>} />
        <Route path="/japanese/sentenceUnderstanding" element={<SentenceUnderstandingJapanese/>} />
        <Route path="/japanese/sentenceCompletion" element={<SentenceCompletionJapanese/>} />
        <Route path="/japanese/errorCorrection" element={<ErrorCorrectionJapanese/>} />

        <Route path="/french" element={<French/>} />
        <Route path="/french/vocab" element={<VocabFrench/>} />
        <Route path="/french/sentenceUnderstanding" element={<SentenceUnderstandingFrench/>} />
        <Route path="/french/sentenceCompletion" element={<SentenceCompletionFrench/>} />
        <Route path="/french/errorCorrection" element={<ErrorCorrectionFrench/>} />

        <Route path="/spanish" element={<Spanish/>} />
        <Route path="/spanish/vocab" element={<VocabSpanish/>} />
        <Route path="/spanish/sentenceUnderstanding" element={<SentenceUnderstandingSpanish/>} />
        <Route path="/spanish/sentenceCompletion" element={<SentenceCompletionSpanish/>} />
        <Route path="/spanish/errorCorrection" element={<ErrorCorrectionSpanish/>} />

        <Route path="/tamil" element={<Tamil/>} />
        <Route path="/tamil/vocab" element={<VocabTamil/>} />
        <Route path="/tamil/sentenceUnderstanding" element={<SentenceUnderstandingTamil/>} />
        <Route path="/tamil/sentenceCompletion" element={<SentenceCompletionTamil/>} />
        <Route path="/tamil/errorCorrection" element={<ErrorCorrectionTamil/>} />

        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
