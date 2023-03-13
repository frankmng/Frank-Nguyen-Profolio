import React from "react";
import taylorsKitchen from '../assets/images/cooking-recipe.jpg'
import centiment from '../assets/images/centiment.png'
import techBlog from '../assets/images/tech_blog_mvc.png'
import thebedlyft from '../assets/images/thebedlyft.png'
import bruceleetraining from '../assets/images/bruceleetraining.png'
import leadstack from '../assets/images/leadstack.png'

import Project from "../components/Project";
import '../styles/Project.css';

const Portfolio = () => {
  return (
    <div>
      <p className='section_portfolio_intro'>Projects</p>
      <div className="portfolio">
        <article>
          <Project title="Lead Stack" description="A lead source integration with Twilio to provide multiple channels of communication." image= {leadstack}  projectLink="https://lead-stack.herokuapp.com/" githubRepo="https://github.com/isayahdurst/leadstack"/>
        </article>
        <article>
          <Project title="Taylor's Kitchen" description=" A dead simple meal plan generator based on your diet and needs." image= {taylorsKitchen}  projectLink="https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/" githubRepo="https://github.com/isayahdurst/taylors-kitchen-meal-prep-app" />
        </article> 
        <article>
          <Project title="Centiment" description="An incentivized token-based social media platform where users purchase access to communities." image= {centiment}  projectLink="https://centiment-inc.herokuapp.com/" githubRepo="https://github.com/isayahdurst/centiment"/>
        </article>
        <article>
          <Project title="Tech Frontier" description="A tech blog platform that allows users to view and post articles on various technology-related topics." image= {techBlog}  projectLink="https://tech-blog-mvc-01.herokuapp.com/" githubRepo="https://github.com/frankmng/Tech-Blog-MVC"/>
        </article>
      </div>
      <p className='section_portfolio_intro'>Blogs</p>
      <div className="portfolio portfolio_section_1">
        <article>
        <Project title="thebedlyft.com" description="A SEO optimized content affiliated blog focused on the idea of Japanese minimalism in the home." image= {thebedlyft}  projectLink="https://thebedlyft.com"/>
        </article> 
        <article>
          <Project title="bruceleetraining.com" description="A SEO optimized content affiliated blog dedicated to the teachings and wisdom of the late Bruce Lee." image= {bruceleetraining}  projectLink="https://bruceleetraining.com/"/>
        </article>
      </div>
    </div>
  );
};
  
export default Portfolio;