import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['I', '\'', 'm', ' ', ' ', ' ', 'S', 'h', 'a', 'y', 'a', 'a', 'n'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br /> 
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>
                        <br/>
                    </h1>
                    <h2>Software Engineer</h2>
                    <a href="about" className="flat-button frosted-button">About</a>
                    <a href="work" className="flat-button frosted-button">Work</a>
                </div>
                <Logo />
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    );
}

export default Home;
