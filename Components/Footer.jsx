import React from 'react'
import './Footer.css'
import github from './Icons/github.png'
import linkedin from './Icons/linkedin.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const openlinkedin = () => {
        const url = 'https://www.linkedin.com/in/afaquewasim09/';
        window.open(url, '_blank');
    }

    const opengit = () => {
        const url = 'https://github.com/afaquewasim';
        window.open(url, '_blank');
    }
    return (
        <div>
            <div className="footer">
                <h1>Copyright <i class="fa-regular fa-copyright"></i> {currentYear} Afaque wasim. All right are reserved</h1>

                <div className="Footericons">
                    <img onClick={openlinkedin} src={linkedin} alt="" />
                    <img onClick={opengit} src={github} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
