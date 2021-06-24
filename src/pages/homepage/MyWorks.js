import React from 'react';
import restaurant from '../../images/restaurant.jpg';
import madReaders from '../../images/madReaders.jpg';
import travelGuru from '../../images/tavelGuru.jpg';
import natour from '../../images/natour.jpg';
import doctorsPortal from '../../images/doctorsPortal.jpg';
import Project from './Project';
import { Link } from 'react-router-dom';

export const projects = [
    {
        id: 1,
        screenshot: travelGuru,
        name: 'Travel Guru full stack website',
        features: `A MERN stack application. User can order book, admin can see all the orders, edit and delete the books and all are connected to
            database, private route, admin panel and dynamic contect implemented, sercured admin panel`,
        tools: [
            'React', 'react router', 'firebase auth', 'express', 'mongodb', 'react-bootstrap', 'heroku'
        ],
        live: 'https://travel-guru-e1c27.firebaseapp.com/',
        client: 'https://github.com/mohammad-naimur-rahman/travel-guru-fullstack-client',
        server: 'https://github.com/mohammad-naimur-rahman/travel-guru-fullstack-server'
    },
    {
        id: 2,
        screenshot: madReaders,
        name: 'Mad readers full stack website',
        features: `A MERN stack application. User can order book, admin can see all the orders, edit and delete the books and all are connected to
            database, private route, admin panel and dynamic contect implemented`,
        tools: [
            'React', 'react router', 'firebase auth', 'express', 'mongodb', 'react-bootstrap', 'heroku'
        ],
        live: 'https://mad-readers-auth.firebaseapp.com/',
        client: 'https://github.com/mohammad-naimur-rahman/mad-readers-fullstack-client',
        server: 'https://github.com/mohammad-naimur-rahman/mad-readers-fullstack-server'
    },
    {
        id: 3,
        screenshot: restaurant,
        name: 'Restaurant website landing page',
        features: 'A simple fully responsive static landing page. And used no framework to design the site. All necessary features in one page',
        tools: [
            'HTML', 'pure CSS', 'SCSS', 'JavaScript', 'Github pages'
        ],
        live: 'https://mohammad-naimur-rahman.github.io/restaurant-website/',
        client: 'https://github.com/mohammad-naimur-rahman/restaurant-website',
        server: ''
    },
    {
        id: 4,
        screenshot: natour,
        name: 'Natour static responsive landing page',
        features: `A simple fully responsive static landing page. And used no framework to design the site. All necessary features in one page`,
        tools: [
            'HTML', 'pure CSS', 'SCSS', 'JavaScript', 'Github pages'
        ],
        live: 'https://mohammad-naimur-rahman.github.io/natour-website/',
        client: 'https://github.com/mohammad-naimur-rahman/natour-website',
        server: ''
    },
    {
        id: 5,
        screenshot: doctorsPortal,
        name: 'Doctors portal full stack application',
        features: `A MERN stack application. User can order for a dental service, set schedule, Private route and react router integration with dynamic rendering. Secured admin panel for doctors and dashboard for users`,
        tools: [
            'React', 'react router', 'firebase auth', 'express', 'mongodb', 'react-bootstrap', 'heroku'
        ],
        live: 'https://doctors-portal-cloud.netlify.app/',
        client: 'https://github.com/mohammad-naimur-rahman/doctors-portal-client',
        server: 'https://github.com/mohammad-naimur-rahman/doctors-portal-server'
    },

]

const MyWorks = () => {

    const projects3 = projects.slice(0, 3);

    return (
        <section className='p-2 p-md-5'>
            <h2 className="heading">Some of my works</h2>
            <div className="py-4">
                {
                    projects3.map(project => <Project key={project.id} project={project} />)
                }
            </div>
            <div className="text-center pb-3">
                <Link to='/projects'>
                    <button className="primary-btn">
                        All of my works
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default MyWorks;