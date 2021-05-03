import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Project = ({ project }) => {
    const { screenshot, name, features, live, client, server, tools } = project;
    return (
        <div className='row my-4 px-2 py-3 project-body rounded' data-aos="fade-up">
            <div className="col-md-6 col-lg-5 project-img-holder">
                <img src={screenshot} className='img-fluid project-img' alt="" />
            </div>
            <div className="col-md-6 col-lg-7">
                <div className="p-2 project">
                    <h5 className='primary-color-text project__name'>{name}</h5>
                    <p className="secondary-color-text project__features">
                        {features}
                    </p>
                    {
                        tools.map((tool, i) => <span key={i} className='tag'>{tool}</span>)
                    }
                    <div className="d-block">
                        <a className='project__link' href={live} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        <a className='project__link' href={client} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                        {
                            server.length > 0 && <a className='project__link' href={server} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faServer} /></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;