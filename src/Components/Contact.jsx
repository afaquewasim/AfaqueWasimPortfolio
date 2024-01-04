import React from 'react'
import './Contact.css'
import location from './Icons/location.png'
import mail from './Icons/mail.png'

const Contact = () => {
    return (
        <div className='contactContainer' id='contact'>
            <div className="contact">
                <div className="contactHead">
                    <h1>Contact</h1>
                    <p>Don't be a wimp! Contact me 👇</p>
                </div>
                <div className="locMial">
                    <div className="location">
                        <div className="locimg">
                            <img src={location} alt="" />
                        </div>
                        <div className="locHead">
                            <h1>Location</h1>
                            <p>Delhi, India</p>
                        </div>
                    </div>
                    <div className="mail">
                    <div className="mailimg">
                            <img src={mail} alt="" />
                        </div>
                        <div className="mailHead">
                            <h1>Mail</h1>
                            <p>afaquewasim786@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
