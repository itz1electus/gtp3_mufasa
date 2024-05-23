import React from 'react';
import './header.css';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Somthing Amazing With GPT-3 OpenAI
        </h1>
        <p>Over 300 applications are delivering GPT-3-powered search, conversation, text completion, and other advanced AI features through an API custom-built and tailored for your needs.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="johndoe@apple.com" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people icons" />
          <p>1,219 people requested access to visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI skull" />
      </div>
    </div>
  )
}

export default Header