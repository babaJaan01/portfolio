import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import LogoR from '../../assets/images/raconteur.png';
import { useEffect, useState } from 'react';


const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='container work-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} 
                            index={15}
                        />
                    </h1>
                        <div className='experience-box'>
                            <h2>Raconteur Animation</h2>
                            <h3>Software Development Intern</h3>
                            <p className='desc1'>Jun 2023 - Aug 2023</p>
                            <p className='desc2'>Worked on creating a flying car simulator/experience for VR. Used C# with the Unity Scripting API, alongside Blender. </p>
                            <img src={LogoR} alt="logo" className='raconteur-logo'/>
                        </div>
                    <h4>More coming soon...</h4>
                    
                </div>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    );
}

export default Work;