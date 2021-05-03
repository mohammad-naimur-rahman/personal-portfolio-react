import React from 'react';
import { useHistory } from 'react-router';
import hero from '../../images/hero.jpg';
const Header = () => {

    const history = useHistory();
    return (
        <header className='row d-flex d-lg-flex flex-column flex-lg-row'>
            <div className="col-lg-7 header-left d-flex flex-column justify-content-center p-4 p-md-5 order-1 order-lg-0" data-aos='fade-left'>
                <div class="slider">
                    <div class="slider-text">Full stack devloper</div>
                    <div class="slider-text">React Developer</div>
                    <div class="slider-text">MERN stack developer</div>
                </div>
                <h1 className='header-left__heading py-2 py-md-2'><span>Hi, I'm</span> Naimur Rahman</h1>
                <p className='header-left__text'>
                    I am a junior full stack web developer, currently mastering MERN stack and it is also my goal. I can convert PSD to html in pixel perfection. I also love react very much and can make react application, static and dynamic application with express and mongodb. I have much knowledge in pure CSS. And also trying to become a master full stack developer.
                </p>
                <div className='pt-3'>
                    <a href="https://drive.google.com/uc?export=download&amp;id=11sVfo3ZXbTB2OmjWcRh0AFxT8pwFQ66m" target="_blank" rel="noreferrer">
                        <button className='primary-btn'>
                            Download CV
                        </button>
                    </a>
                    <button className='secondary-btn' onClick={() => history.push('/contact-me')}>
                        Hire Me
                    </button>
                </div>
            </div>
            <div data-tilt className="col-lg-5 header-right d-flex justify-content-center align-items-center order-0 order-lg-1" data-aos='fade-right'>
                <img src={hero} alt="Naimur" />
            </div>
        </header>
    );
};

export default Header;