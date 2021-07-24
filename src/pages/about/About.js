import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router-dom';
import aboutPhoto from '../../images/about.jpg';
import { footerLinks } from '../homepage/Footer';

const expertise = [
    'HTML', 'CSS', 'SCSS', 'Bootstrap', 'React', 'Material UI', 'React router', 'Vue JS', 'Next JS'
]

const comfortable = [
    'Tailwind CSS', 'JavaScript', 'ES6', 'Node', 'Express', 'MongoDB', 'firebase', 'redux'
]

const familiar = [
    'TypeScript', 'd3', 'ant design', 'rechart'
]

const toolsUsed = [
    'Git', 'VS Code', 'Chrome dev tool', 'netlify', 'heroku', 'figma', 'Adobe XD', 'Postman'
]

const About = () => {
    const location = useLocation();
    if (location.pathname === '/about-me') {
        document.title = "About Me | Naimur Rahman";
    }

    return (
        <motion.section className='p-2 p-md-5 about-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="py-3 text-center about-intro">
                <img src={aboutPhoto} alt='aboutImage' />
                <h3 className='primary-color-text pt-3 pb-2'>Naimur Rahman</h3>
                <p className='secondary-color-text'>Naimur rahman, currently training himself aggresively to become a master level MERN stack devloper. Completed honours in Mathematics but have passion in Software Development and Programming.
                </p>
                <div className='py-3'>
                    {
                        footerLinks.map(link => <>
                            <a href={link.link} target="_blank" rel='noreferrer' style={{ color: 'var(--color-primary)', fontSize: '24px', display: 'inline-block', padding: '10px 10px 20px 10px' }}>
                                <FontAwesomeIcon icon={link.icon} />
                            </a>
                        </>)
                    }
                </div>
                <a href="https://drive.google.com/uc?export=download&amp;id=1OugHV3_rAJJgvtw1SWpAxrggB6acOvYF" target="_blank" rel="noreferrer">
                    <button className='primary-btn'>
                        Get CV
                    </button>
                </a>
            </div>
            <div className="skills py-4">
                <h2 className='heading'>My skills</h2>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Expertise in</h4>
                    {
                        expertise.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Comfortable with</h4>
                    {
                        comfortable.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Familiar with</h4>
                    {
                        familiar.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Tools I use</h4>
                    {
                        toolsUsed.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
            </div>
        </motion.section>
    );
};

export default About;