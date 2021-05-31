import React, {useState} from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import Projects from '../../components/Projects';
import dayPlanner from '../../imgs/day-planner.jpg';
import musicSearch from '../../imgs/music search.png';
import noteTaker from '../../imgs/note-taker.gif';
import quiz from '../../imgs/quiz.gif';
import weatherReport from '../../imgs/weather-report.jpg';
import filmGrabber from '../../imgs/filmGrabber.jpg';

function Portfolio() {
    const [projects] = useState([{
        name: 'Music Searcher',
        description: 'search for any song',
        image: musicSearch,
        github: 'https://github.com/evanteems/Musix-Genre',
        website: 'https://evanteems.github.io/Musix-Genre/',
        icon1: <AiOutlineEye />,
        icon2: <AiFillGithub />,
    },
    {
        name: 'Day Planner',
        description: 'schedule tracker',
        image: dayPlanner,
        github: 'https://github.com/GRech17/day-planner',
        website: 'https://grech17.github.io/day-planner/',
        icon1: <AiOutlineEye />,
        icon2: <AiFillGithub />,
    },
    {
        name: 'Weather Report',
        description: '5-day forecast for any city in the world',
        image: weatherReport,
        github: 'https://github.com/GRech17/Weather-App',
        website: 'https://grech17.github.io/Weather-App/',
        icon1: <AiOutlineEye />,
        icon2: <AiFillGithub />,
    },
    {
        name: 'Quiz',
        description: 'basic coding quiz',
        image: quiz,
        github: 'https://github.com/GRech17/week-4-creating-code-quiz',
        website: 'https://grech17.github.io/week-4-creating-code-quiz/',
        icon1: <AiOutlineEye />,
        icon2: <AiFillGithub />,
    },
    {
        name: 'Note Taker',
        description: 'note taker',
        image: noteTaker,
        github: 'https://github.com/GRech17/note-taker',
        website: 'https://note-taker-17-app.herokuapp.com/notes',
        icon1: <AiOutlineEye />,
        icon2: <AiFillGithub />,
    },
    {
        name: 'Film Grabber',
        description: 'film saver',
        image: filmGrabber,
        github: 'https://github.com/GRech17/film-grabber',
        website: 'https://film-grabber.herokuapp.com/',
        icon1: <AiOutlineEye />,
        icon2: <AiFillGithub />,
    },
    ]);

    return (
        <main id='main'>
            <section id='portfolio' className='portfolio section-bg'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>Portfolio</h2>
                    </div>

                    <div className='row portfolio-container' data-aos='fade-up' data-aos-delay='100'>
                        {projects ? (
                            projects.map((project) => {
                                return <Projects {...project} />;
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Portfolio;