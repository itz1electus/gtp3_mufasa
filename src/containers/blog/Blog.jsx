import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const featuredArticle = {
  title: "GPT-3 and OpenAI is the future. Let us explore how it really is.",
  date: "July 16, 2024",
  image: blog01,
}

const articles = [
  {
    title: "What is the future of AI?",
    date: "September 19, 2023",
    image: blog02
  },
  {
    title: "Who is the founder of OpenAI?",
    date: "December 2, 2023",
    image: blog03
  },
  {
    title: "What next for GPT-3 and OpenAI?",
    date: "August 13, 2022",
    image: blog04
  },
  {
    title: "A look back at ChatGPT and its versions",
    date: "December 25, 2023",
    image: blog05
  },
]

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, and we are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {<Article title={featuredArticle.title} date={featuredArticle.date} imageURL={featuredArticle.image}/>}
        </div>
        <div className="gpt3__blog-container_groupB">
          {articles.map((item, index) => (
            <Article imageURL={item.image} title={item.title} date={item.date} key={item.title + index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog