import React from 'react';
import { useHistory } from 'react-router';
import Tilt from 'react-tilt'
import hero from '../../images/hero.jpg';

const Header = () => {

    const history = useHistory();
    return (
        <header className='row d-flex d-lg-flex flex-column flex-lg-row'>
            <div className="col-lg-7 header-left d-flex flex-column justify-content-center p-4 p-md-5 order-1 order-lg-0" data-aos='fade-up'>
                <div className="slider">
                    <div className="slider-text">Full stack devloper</div>
                    <div className="slider-text">React Developer</div>
                    <div className="slider-text">MERN stack developer</div>
                </div>
                <h1 className='header-left__heading py-2 py-md-2'><span>Hi, I'm</span> Naimur Rahman</h1>
                <p className='header-left__text'>
                    I am a Junior Full Stack Web Developer, currently mastering MERN stack and it is also my goal. I can convert design to code in pixel perfection. I am a react addict and can make single page applications, static and dynamic applications with Express JS and mongodb. I have much knowledge in pure CSS with SCSS. And also trying to become a master full stack developer.
                </p>
                <div className='pt-3'>
                    <a href="https://drive.google.com/uc?export=download&amp;id=1OugHV3_rAJJgvtw1SWpAxrggB6acOvYF" target="_blank" rel="noreferrer">
                        <button className='primary-btn'>
                            Get CV
                        </button>
                    </a>
                    <button className='secondary-btn' onClick={() => history.push('/contact-me')}>
                        Hire Me
                    </button>
                </div>
            </div>
            <div data-tilt className="col-lg-5 header-right d-flex justify-content-center align-items-center order-0 order-lg-1" data-aos='fade-up'>
                <Tilt options={{ max: 15, scale: 1, speed: 200 }}>
                    <img src={hero} alt="Naimur" />
                </Tilt>
            </div>
        </header>
    );
};

export default Header;
