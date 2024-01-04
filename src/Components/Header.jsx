// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [hamburger, setHamburger] = useState(false);

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    const navlinks = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`main ${isSticky ? 'sticky' : ''}`}>
                <div className="logo">
                    <h1 onClick={pageUp}>Afaque Wasim</h1>
                </div>
                <div className="menu">
                    {navlinks.map((item) => (
                        <li className = 'desk' key={item.name}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    <li className = 'mob' onClick={() => hamburgerMenu()}>
                        <i className="fa-solid fa-bars-staggered mobile-menu"></i>
                    </li>
                </div>
            </div>
            {/* mobile */}
            <div className={`mobile-nav ${hamburger ? "open-menu" : "xmark"}`}>
                <span onClick={() => hamburgerMenu()}>
                    <i className="fa-solid fa-xmark"></i>
                </span>

                <ul>
                    {navlinks.map((item) => (
                        <li className = 'mob-menu' key={item.name} onClick={() => hamburgerMenu()}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;
