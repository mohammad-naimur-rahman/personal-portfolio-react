import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profile from '../../images/profile.jpg';

const SideNav = () => {

    const location = useLocation().pathname;

    return (
        <div className='side-nav'>
            <div className="side-nav__profile p-2 p-md-5">
                <img className='side-nav__profile--img' src={profile} alt="profile" />
                <h3 className='side-nav__profile--heading secondary-color-text pt-2'>Naimur Rahman</h3>
                <p className='side-nav__profile--text secondary-color-text pt-1 pb-2'>Web Developer</p>
                <div className='side-nav__profile--social'>
                    <a className='side-nav__profile--social__link' target='_blank' rel='noreferrer' href="https://www.twitter.com/your_naimur">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className='side-nav__profile--social__link' target='_blank' rel='noreferrer' href="https://www.facebook.com/yourNaimur">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className='side-nav__profile--social__link' target='_blank' rel='noreferrer' href="https://www.github.com/mohammad-naimur-rahman">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            <div className="side-nav__nav">
                <ul>
                    <li>
                        <Link to='/' className={location === '/' ? 'location' : null}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about-me' className={location === '/about-me' ? 'location' : null}>About Me</Link>
                    </li>
                    <li>
                        <Link to='/projects' className={location === '/projects' ? 'location' : null}>My Works</Link>
                    </li>
                    <li>
                        <Link to='/blog' className={location === '/blog' ? 'location' : null}>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact-me' className={location === '/contact-me' ? 'location' : null}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;