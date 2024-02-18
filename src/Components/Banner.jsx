import React from 'react'
import BannerImg from './img/banner.jpeg'
import './Banner.css'
import html from './Icons/html.png'
import css from './Icons/css.png'
import js from './Icons/js.png'
import react from './Icons/react.png'
import aws from './Icons/aws.png'
import tailwind from './Icons/tailwind.png'
import github from './Icons/github.png'
import linkedin from './Icons/linkedin.png'

const Banner = () => {

    const openlinkedin = () => {
        const url = 'https://www.linkedin.com/in/afaquewasim09/';
        window.open(url, '_blank');
    }

    const opengit = () => {
        const url = 'https://github.com/afaquewasim';
        window.open(url, '_blank');
    }
    return (
        <div className='bannerHead' id='home'>
            <div className="banner_main">
                <div className="infoText">
                    <h1>Front-End React Developer 👋</h1>
                    <div className="infoPara">
                        <p>Hi, I am Afaque Wasim. A passionate front-end React Developer based in Delhi, India</p>
                    </div>
                    <div className="icons">
                        <img onClick={openlinkedin} src={linkedin} alt="" />
                        <img onClick={opengit}  src={github} alt="" />
                    </div>
                </div>
                <div className="img">
                    <img className='bannerImg' src={BannerImg} alt="" />
                </div>
            </div>
            <div className="topTech">
                <p className='techName'>Tech Stack</p>
                <div className="gif">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img src={tailwind} alt="" />
                    <img src={aws} alt="" />
                    
                </div>

            </div>
        </div>
    )
}

export default Banner
