import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <>
        <Navbar/>
        <div className="about-container">
            <div className='para'>
                <h1 className='heading'>About Us</h1>
                <p>Welcome to Language Proficiency Tracker, your one-stop destination for improving language skills! Our platform is designed to assist learners of all levels in mastering languages effectively and efficiently.</p>
                <p>At Language Proficiency Tracker, we believe that language learning should be enjoyable and accessible to everyone. Whether you're a beginner starting your journey or an advanced learner seeking to refine your skills, we're here to support you every step of the way.</p>
                <p>Our platform offers a comprehensive range of language tests, including vocabulary assessments, sentence understanding exercises, sentence correction challenges, and error correction drills. With personalized study plans and real-time progress tracking, you can tailor your learning experience to suit your individual needs and goals.</p>
                <h3 className='heading'>Our Mission</h3>
                <p>Our mission is to empower language learners worldwide by providing them with innovative tools, engaging resources, and a supportive community to achieve fluency and proficiency in their target languages.</p>
            </div>
        </div>

        <Footer/>
    </>
  );
};

export default About;
