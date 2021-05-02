import React from 'react';
import hero from '../../images/hero.jpg';

const Header = () => {
    return (
        <header className='row d-flex d-lg-flex flex-column flex-lg-row'>
            <div className="col-xxl-7 col-xl-5 col-lg-7 header-left d-flex flex-column justify-content-center p-4 p-md-5 order-1 order-lg-0">
                <p className='header-left__intro'>MERN stack developer</p>
                <h1 className='header-left__heading py-2 py-md-2'><span>Hi, I'm</span> Naimur Rahman</h1>
                <p className='header-left__text'>
                    Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt eget orci.
                </p>
                <div className='pt-3'>
                    <a href="https://drive.google.com/uc?export=download&amp;id=11sVfo3ZXbTB2OmjWcRh0AFxT8pwFQ66m" target="_blank" rel="noreferrer">
                        <button className='primary-btn'>
                            Download CV
                    </button>
                    </a>
                    <button className='secondary-btn'>
                        Hire Me
                </button>
                </div>
            </div>
            <div className="col-xxl-5 col-xl-7 col-lg-5 header-right d-flex justify-content-center align-items-center order-0 order-lg-1">
                <img src={hero} alt="Naimur" />
            </div>
        </header>
    );
};

export default Header;