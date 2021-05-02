import React from 'react';
import aboutPhoto from '../../images/about.jpg';

const expertise = [
    'HTML', 'CSS', 'SCSS', 'Bootstrap', 'React', 'Material UI', 'React router'
]

const comfortable = [
    'Tailwind CSS', 'JavaScript', 'ES6', 'Node', 'Express', 'MongoDB', 'firebase', 'redux'
]

const familiar = [
    'TypeScript', 'd3', 'ant design', 'rechart'
]

const toolsUsed = [
    'Git', 'VS Code', 'Chrome dev tool', 'netlify', 'heroku', 'figma', 'Adobe XD', 'Postman'
]

const about = () => {
    return (
        <section className='p-2 p-md-5' style={{ marginTop: '60px' }}>
            <div className="py-3 text-center about-intro">
                <img src={aboutPhoto} alt='aboutImage' />
                <h3 className='primary-color-text pt-3 pb-2'>Naimur Rahman</h3>
                <p className='secondary-color-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A corrupti molestiae, voluptatem voluptatum dicta quae excepturi exercitationem eum, eaque reiciendis fugit repellat natus aperiam repudiandae quod omnis ducimus soluta laboriosam.</p>
                <a href="https://drive.google.com/uc?export=download&amp;id=11sVfo3ZXbTB2OmjWcRh0AFxT8pwFQ66m" target="_blank" rel="noreferrer">
                    <button className='primary-btn'>
                        Download CV
                    </button>
                </a>
            </div>
            <div className="skills py-4">
                <h2 className='heading'>My skills</h2>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Expertise in</h4>
                    {
                        expertise.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Comfortable with</h4>
                    {
                        comfortable.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Familiar with</h4>
                    {
                        familiar.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
                <div className="py-3">
                    <h4 className='primary-color-text pb-2'>Tools I use</h4>
                    {
                        toolsUsed.map(tag => <span className='tag big'>{tag}</span>)
                    }
                </div>
            </div>
        </section>
    );
};

export default about;