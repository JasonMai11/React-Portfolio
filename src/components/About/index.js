import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import aboutBackground from '../../assets/videos/cool-anime-collection-theme-4k-live-wallpaper.mp4';
import zenitsu from '../../assets/videos/sheesh.mp4';
import {
    faGit,
    faHtml5,
    faJsSquare,
    faPython,
    faReact,
    faSwift,
  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
      
    return (
        <>
        <div className = 'container about-page'>
            <video src = {aboutBackground} className = "aboutBackground" autoPlay loop muted/>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass = {letterClass}
                    strArray = {['A','b','o','u','t',' ', 'M','e']} 
                    idx = {15}
                    />
                </h1>
                <p><b>• I have exceptional understanding with Object Oriented Programming (OOP), Data Structures, Algorithms and Complexities.</b></p>
                <p><b>• Expert in leading, planning, and communicating validated by working on an iOS app development team at CodePath.</b></p>
                <p><b>• Adept learner exhibited by learning the Parse database as well as APIs used at the University at Buffalo's Hackathon.</b></p>
                <p></p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faSwift} color="#EC4D28" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGit} color="#EC4D28" />
                    </div>
                </div>
            </div>

            /* hexagon
            <div class="cxq-spinner cxq-spinner--rotatePlane">
                <div class="cxq-spinner-hexagon ">
                </div>
            </div>
            <div class="rects">
                <div class="rect rect1"></div>
                <div class="rect rect2"></div>
                <div class="rect rect3"></div>
                <div class="rect rect4"></div>
                <div class="rect rect5"></div>
            </div>
            */  
        </div>

        <Loader type="line-scale" />
    </>

    )
}


export default About