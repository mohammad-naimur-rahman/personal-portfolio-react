import { faEnvelope, faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactMe = () => {
    return (
        <section>
            <div className="row d-flex d-md-flex flex-column flex-md-row" style={{ minHeight: '100vh', marginTop: '70px' }}>
                <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-0">
                    <div>
                        <div className='px-2 py-3'>
                            <FontAwesomeIcon className='contact-icon' icon={faUser} />
                            <h5 className='primary-color-text pt-3'>Naimur Rahman</h5>
                        </div>
                        <div className='px-2 py-3'>
                            <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                            <h5 className='primary-color-text pt-3'>naeemhasn28@gmail.com</h5>
                        </div>
                        <div className='px-2 py-3'>
                            <FontAwesomeIcon className='contact-icon' icon={faLocationArrow} />
                            <h5 className='primary-color-text pt-3'>Narayanganj, Bangladesh</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center flex-column  order-0 order-md-1">
                    <form className="contact-form p-4 p-md-5">
                        <h2 className='pb-2'>Send your feedback</h2>
                        <input type="text" placeholder='Your Full Name' className="contact-form__name" />
                        <input type="eamil" className='contact-form__email' placeholder='Your email' />
                        <textarea className='contact-form__textarea' placeholder='Your valuable feedback'></textarea>
                        <button className="primary-btn">Send feedback</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;