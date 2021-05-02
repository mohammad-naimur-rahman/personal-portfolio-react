import React from 'react';
import { projects } from '../homepage/MyWorks';
import Project from '../homepage/Project';

const Projects = () => {
    return (
        <section className='p-2 p-md-5' style={{ marginTop: '70px' }}>
            <h2 className="heading">My works</h2>
            <div className="py-4">
                {
                    projects.map(project => <Project key={project.id} project={project} />)
                }
            </div>
        </section>
    );
};

export default Projects;