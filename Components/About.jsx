import React from 'react'
import './About.css'
import AboutImg from './img/Developer activity-amico.png'

const About = () => {
    return (
        <div>
            <div className="about" id='about'>
                <div className="aboutLeft">
                    <img src={AboutImg} alt="" />
                </div>
                <div className="AboutRight">
                    <h1 className='aboutMe'>About Me</h1>
                    <h1 className='desAbout'>A dedicated Front-End Developer based in Delhi, India</h1>
                    <p className='myIntro'>I am currently studying Electrical and Electronic Engineering at Dronacharya Group of Institutions. Along with my studies, I've developed a strong interest in web development, which I'm currently learning. I hope to explore the vast opportunities available in the digital world through web development and use my knowledge to create engaging and innovative websites.</p>
                </div>
            </div>
        </div>
    )
}

export default About
