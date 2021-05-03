import React from 'react';
import frontEnd from '../../icons/front-end.svg';
import backEnd from '../../icons/back-end.svg';
import reactIcon from '../../icons/react.svg';
import fullStack from '../../icons/full-stack.svg';
import Service from './Service';


const services = [
    {
        id: 1,
        icon: frontEnd,
        name: 'Frontend application',
        description: 'I can make beautiful responsive front end application as well as landing page. I can assure to make the application pixel perfect as the design provided. I am comfortable with both with or without framework. I also use Sass to ensure efficiency and Future proof work.'
    },
    {
        id: 2,
        icon: backEnd,
        name: 'Backend application',
        description: 'I also do back end using Node js, express js as backend and mongodb as database. I am comfortable with mongoose ODM. I usually work with Rest API but also known to GraphQL. I use JWT token for security reason for safe APIs.'
    },
    {
        id: 3,
        icon: reactIcon,
        name: 'React application',
        description: 'I am very comfortable working with react. I know react router, various react framework like Material UI, react bootstrap, ant design etc. I am comfortable with firebase auth also. I am comfortable with context API and redux both for state management.'
    },
    {
        id: 4,
        icon: fullStack,
        name: 'Full stack application',
        description: 'I can build a full stack application from sketch. The design mockup and backend features is just needed to start up. I am sure to deliver you a secured fluence full stack application. I prefer MERN stack to build a full stack application more.'
    }
]

const Services = () => {
    return (
        <section className='p-2 p-md-5'>
            <h2 className='heading'>Here's how can I help you</h2>
            <div className="row">
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;