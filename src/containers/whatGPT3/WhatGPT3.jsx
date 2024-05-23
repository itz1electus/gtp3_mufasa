import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__padding" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3?" text="Generative Pre-trained Transformer 3 (GPT-3) is a large language model released by OpenAI in 2020. Like its predecessor, GPT-2, it is a decoder-only transformer model of deep neural network, which supersedes recurrence and convolution-based architectures with a technique known as 'attention'. This attention mechanism allows the model to selectively focus on segments of input text it predicts to be most relevant. GPT-3 has 175 billion parameters, each with a 16-bit precision, thus requiring 350GB of storage space as each parameter takes 2 bytes of space. It has a context window size of 2048 tokens, and has demonstrated strong 'zero-shot' and 'few-shot' learning abilities on many tasks." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Intelligent" text="Writes, brainstorms, edits and explores ideas with you" />
        <Feature title="Productivity" text="Summarize meetings. Find new insights. Increase productivity." />
        <Feature title="Code Better" text="Generate and debug code. Automate repetitive tasks. Learn new APIs." />
      </div>
    </div>
  )
}

export default WhatGPT3