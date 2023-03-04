import React from "react";
import profilePhoto from '../assets/images/profile_pic.jpg'

const About = () => {
  return (
<div className="section_container">
  <div className="layout">
    <p className="col col-main">
		<p className='section_intro'>About me</p>
			<p>I'm Frank Nguyen, a full stack web developer and systems engineer based in Southern California. </p><p>I graduated with a bachelors degree in Computer Science and secondary specialization in web design and UI/UX from California University of Long Beach in 2017.</p>
			<p> Since then I've been building stuff on the web — from content blogs to web apps, to creative digital designs used in print and digital marketing.</p> 
		</p>
    <p className="col col-complementary" >
			{/* <img src={profilePhoto} alt="profile" className="image-cover filter-contrast"/> */}
			<img src={profilePhoto} alt="profile photo" className="image-cover filter-contrast"/>
        </p>      
  </div>  
    </div>
   
  );
};
  
export default About;