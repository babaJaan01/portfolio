import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faJava, faJsSquare, faPython, faReact, faSwift } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        index = {15}
                    />
                </h1>
                <p>I'm a tech enthusiast and am especially interested in developing cutting edge software and hardware. Currently studying at San Jose State University.</p>
                <p>Some languages I am comfortable with are: Python, Java, JavaScript, C#, Swift, HTML, CSS, and SQL.</p>
                <p>I also have experience with many frameworks and libraries including: AWS, ReactJS, MySQL, PyTorch, TensorFlow, NumPy, Pandas, Matplotlib, Keras, and SwiftUI.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#3673A5" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faJava} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faSwift} color="#FE452A" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faAws} color="#FF9C08" />
                    </div>
            </div>
        </div>
        </div>
        <Loader type="ball-scale-multiple"/>
        </>
    )
}

export default About