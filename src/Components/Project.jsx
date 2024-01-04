import React from 'react'
import './Project.css'
import diceGame from './img/dicegame.png'
import imageGallery from './img/image-gallery.png'
import expenceTracer from './img/expences.png'
import Dubai from './img/Neumorphism-Form.png'
import html from './Icons/html.png'
import css from './Icons/css.png'
import js from './Icons/js.png'
import react from './Icons/react.png'
import tailwind from './Icons/tailwind.png'
import github from './Icons/github.png'
import preview from './Icons/preview.png'

const Project = () => {

    const codeImageGallery = () => {
        const url = 'https://github.com/afaquewasim/Image-Gallery';
        window.open(url, '_blank');
    }
    const codeDiceGame = () => {
        const url = 'https://github.com/afaquewasim/Dice-Game';
        window.open(url, '_blank');
    }
    const codeExpenceTracker = () => {
        const url = 'https://github.com/afaquewasim/ExpenseTracker';
        window.open(url, '_blank');
    }
    const codeNeumorphismForm = () => {
        const url = 'https://github.com/afaquewasim/Neumorphism-Form';
        window.open(url, '_blank');
    }

    return (
        <div>
            <div className="portfolio" id='projects'>
                <div className="portfolio_content">
                    <div className="portIntro">
                        <h1 className='portName'>Portfolio</h1>
                        <p className='unique'>Each Project is unique piece of Development</p>
                    </div>
                    <div className="allproject">
                        {/* First Project */}
                        <div className="myprojects">
                            <div className="projectImg">
                                <img className='imgProject' src={imageGallery} alt="" />
                            </div>
                            <div className="ProjectInfo">
                                <h1 className="head">Image Gallery</h1>
                                <p>
                                    Experience a React and Tailwind CSS gallery, connected to a live API. Seamlessly responsive, it offers diverse image exploration, intuitive interactions, and a captivating blend of design and technology.
                                </p>
                                <div className="project">
                                    <div>
                                        <span>React</span>
                                        <img src={react} alt="" />
                                    </div>
                                    <div>
                                        <span>Tailwind CSS</span>
                                        <img src={tailwind} alt="" />
                                    </div>
                                </div>
                                <div className="btnHead">
                                    <div onClick={codeImageGallery}>
                                        <span>Code</span>
                                        <img src={github} alt="" />
                                    </div>
                                    <div>
                                        <span>Preview</span>
                                        <img src={preview} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Project */}

                        <div className="myprojects">
                            <div className="ProjectInfo">
                                <h1 className="head">Dice Game</h1>
                                <p>Created a dice game for my portfolio, emphasizing simplicity and accessibility. Players of all levels can enjoy rolling dice to achieve objectives, showcasing my design for easy and engaging gameplay.
                                </p>
                                <div className="project">
                                    <div>
                                        <span>HTML</span>
                                        <img src={html} alt="" />
                                    </div>
                                    <div>
                                        <span>CSS</span>
                                        <img src={css} alt="" />
                                    </div>
                                    <div>
                                        <span>Javascript</span>
                                        <img src={js} alt="" />
                                    </div>
                                </div>
                                <div className="btnHead">
                                    <div onClick={codeDiceGame}>
                                        <span>Code</span>
                                        <img src={github} alt="" />
                                    </div>
                                    <div>
                                        <span>Preview</span>
                                        <img src={preview} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="projectImg">
                                <img className='imgProject' src={diceGame} alt="" />
                            </div>
                        </div>

                        {/* Third Project */}

                        <div className="myprojects">
                            <div className="projectImg">
                                <img className='imgProject' src={expenceTracer} alt="" />
                            </div>
                            <div className="ProjectInfo">
                                <h1 className="head">Expence Tracker</h1>
                                <p>
                                    Developed an Expense Tracker application that efficiently manages finances. It allows users to easily input, categorize, and track expenses, providing valuable insights into their spending habits and financial management skills.
                                </p>
                                <div className="project">
                                    <div>
                                        <span>React</span>
                                        <img src={react} alt="" />
                                    </div>
                                    <div>
                                        <span>Tailwind CSS</span>
                                        <img src={tailwind} alt="" />
                                    </div>
                                </div>
                                <div className="btnHead">
                                    <div onClick={codeExpenceTracker}>
                                        <span>Code</span>
                                        <img src={github} alt="" />
                                    </div>
                                    <div>
                                        <span>Preview</span>
                                        <img src={preview} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fourth Project */}

                        <div className="myprojects">
                            <div className="ProjectInfo">
                                <h1 className="head">Neumorphism-Form</h1>
                                <p>
                                    Designed a Neumorphic Form UI element, blending modern aesthetics with user-centered design. This form harmonizes soft shadows and subtle highlights to create an intuitive and visually pleasing user interaction experience.
                                </p>
                                <div className="project">
                                    <div>
                                        <span>HTML</span>
                                        <img src={html} alt="" />
                                    </div>
                                    <div>
                                        <span>CSS</span>
                                        <img src={css} alt="" />
                                    </div>
                                </div>
                                <div className="btnHead">
                                    <div onClick={codeNeumorphismForm}>
                                        <span>Code</span>
                                        <img src={github} alt="" />
                                    </div>
                                    <div>
                                        <span>Preview</span>
                                        <img src={preview} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="projectImg">
                                <img className='imgProject' src={Dubai} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
