import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Type, talk, and use it your way",
    text: "With ChatGPT, you can type or start a voice conversation by tapping the headphone icon in the mobile app. ",
  },
  {
    title: "Browse the web",
    text: "ChatGPT can answer your questions using its vast knowledge and with information from the web.",
  },
  {
    title: "Analyze data and create charts",
    text: "Upload a file and ask ChatGPT to help analyze data, summarize information or create a chart. ",
  },
  {
    title: "Create images",
    text: "ChatGPT Plus users can ask ChatGPT to create images using a simple sentence or even a detailed paragraph.",
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is now and you just need to realize it. Step into the future today and make it happen.</h1>
        <p>Request Early Access to get started!</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features