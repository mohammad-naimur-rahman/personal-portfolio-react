import { motion } from 'framer-motion';
import React from 'react';
import { projects } from '../homepage/MyWorks';
import Project from '../homepage/Project';

const Projects = () => {
    return (
        <motion.section className='p-2 p-md-5 project-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="heading">My works</h2>
            <div className="py-4">
                {
                    projects.map(project => <Project key={project.id} project={project} />)
                }
            </div>
        </motion.section>
    );
};

export default Projects;