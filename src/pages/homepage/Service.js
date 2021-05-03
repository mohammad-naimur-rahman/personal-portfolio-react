import React, { useEffect } from 'react';
import AOS from 'aos';

const Service = ({ service }) => {
    const { icon, name, description } = service;

    useEffect(() => {
        AOS.init({ duration: 500, offset: 300 });
    }, []);

    return (
        <div className='col-md-6 secondary-color-text' data-aos='zoom-in'>
            <div className="py-4 py-lg-5 px-2 px-lg-4 service">
                <img className='pb-2 ml-1' src={icon} alt="icon" />
                <h4 className='pb-2'>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;