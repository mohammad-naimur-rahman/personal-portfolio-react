import React from 'react';
import { Link } from 'react-router-dom';

const SayHello = () => {
    return (
        <div className='p-2 p-md-5'>
            <h2 className="heading">Get in touch</h2>
            <div className="text-center mx-auto py-5" style={{ maxWidth: '700px' }}>
                <h3 className='primary-color-text'>I'd love to hear from you</h3>
                <p className='secondary-color-text py-3'>I always keep some time along with my works to broad and give strength to my developer community. Feel free to give any feedback, advice, allegation or anything else...</p>
                <Link to='/contact-me'><button className="primary-btn">Say Hello</button></Link>
            </div>
        </div>
    );
};

export default SayHello;