import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="woman with a VR headset"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get started!</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>We believe our research will eventually lead to artificial general intelligence, a system that can solve human-level problems. Building safe and beneficial AGI is our mission. We build our generative models using a technology called deep learning, which leverages large amounts of data to train an AI system to perform a task. Our text models are advanced language processing tools that can generate, classify, and summarize text with high levels of coherence and accuracy.</p>
        <h4>So what are you waiting for? The world is your oyster!</h4>
      </div>
    </div>
  )
}

export default Possibility