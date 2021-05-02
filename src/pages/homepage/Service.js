import React from 'react';

const Service = ({ service }) => {
    const { icon, name, description } = service;
    return (
        <div className='col-md-6 secondary-color-text'>
            <div className="py-5 px-4 service">
                <img className='pb-2 ml-1' src={icon} alt="icon" />
                <h4 className='pb-2'>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;