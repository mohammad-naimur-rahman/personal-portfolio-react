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
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eos minus dolorum iusto? Laborum molestias temporibus veritatis accusamus fuga quod ad saepe porro neque nam. Voluptas mollitia alias dicta laboriosam.'
    },
    {
        id: 2,
        icon: backEnd,
        name: 'Backend application',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eos minus dolorum iusto? Laborum molestias temporibus veritatis accusamus fuga quod ad saepe porro neque nam. Voluptas mollitia alias dicta laboriosam.'
    },
    {
        id: 3,
        icon: reactIcon,
        name: 'React application',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eos minus dolorum iusto? Laborum molestias temporibus veritatis accusamus fuga quod ad saepe porro neque nam. Voluptas mollitia alias dicta laboriosam.'
    },
    {
        id: 4,
        icon: fullStack,
        name: 'Full stack application',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eos minus dolorum iusto? Laborum molestias temporibus veritatis accusamus fuga quod ad saepe porro neque nam. Voluptas mollitia alias dicta laboriosam.'
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