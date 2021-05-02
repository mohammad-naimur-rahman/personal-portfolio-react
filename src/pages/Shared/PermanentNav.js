import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.jpg';

const PermanentNav = () => {
    return (
        <div className='text-white nav-thing'>
            <div className='d-flex align-items-center justify-content-between'>
                <h6 className='pl-2 nav-heading'>Naimur Rahman</h6>
                <label htmlFor="check" className='nav-start d-flex align-items-center justify-content-center'>
                    <span className='nav-line'></span>
                </label>
                <input type="checkbox" className='d-none' name="check" id="check" />
                <div className='side-permanent-nav'>
                    <div className="side-permanent-nav__profile p-2">
                        <img className='side-permanent-nav__profile--img' src={profile} alt="profile" />
                        <h3 className='side-permanent-nav__profile--heading secondary-color-text pt-2'>Naimur Rahman</h3>
                        <p className='side-permanent-nav__profile--text secondary-color-text pt-1 pb-2'>Web Developer</p>
                        <div className='side-permanent-nav__profile--social'>
                            <a className='side-permanent-nav__profile--social__link' target='_blank' rel='noreferrer' href="https://www.twitter.com/your_naimur">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className='side-permanent-nav__profile--social__link' target='_blank' rel='noreferrer' href="https://www.facebook.com/yourNaimur">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className='side-permanent-nav__profile--social__link' target='_blank' rel='noreferrer' href="https://www.github.com/mohammad-naimur-rahman">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="side-permanent-nav__nav">
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about-me'>About Me</Link>
                            </li>
                            <li>
                                <Link to='/projects'>My Works</Link>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact-me'>Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PermanentNav;