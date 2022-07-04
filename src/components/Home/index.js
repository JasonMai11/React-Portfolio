import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
import Valorant from '../../assets/images/ValorantGamerGif.gif';
import animeProgramming from '../../assets/images/animeprogramming.gif'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J','a', 's', 'o', 'n', ' ', 'M', 'a', 'i']
    const jobArray = ['a', ' ', 'S', 'o', 'f','t','w','a','r','e', ' ','E','n','g','i','n','e','e','r']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, []);

      return (
        <>

            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>l</span>
                    <span className={`${letterClass} _15`}>o</span>
                    <span className={`${letterClass} _16`}>,</span>
                    <br />
                    <span className={`${letterClass} _17`}>I</span>
                    <span className={`${letterClass} _18`}>'</span>
                    <span className={`${letterClass} _19`}>m</span>
                    &nbsp;
                   <AnimatedLetters letterClass = {letterClass} 
                    strArray = {nameArray}
                    idx = {15} />
                    <br />
                    <AnimatedLetters letterClass = {letterClass} 
                    strArray = {jobArray}
                    idx = {17} />
                    </h1>
                    <h2>Web/Mobile App Developer | Swift Expert | Content Creator</h2>
                    <a href="https://www.linkedin.com/in/jason-mai-460583196/details/featured/1635494628427/single-media-viewer/">
                    <div className = 'flat-button1'>RESUME</div>
                    </a>
                    <Link to = "/contact" className = 'flat-button2'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>

            <Loader type="pacman" />

            <div className= 'container scroll-effects'>
            <ScrollContainer>
                <ScrollPage page = {0}>
                <Animator animation = {batch(Fade(), MoveOut())}>
                <div className = "lookDownText"><b><p>Scroll Down</p></b></div>
                </Animator>
                </ScrollPage>
                <ScrollPage page = {1}>
                <div className = "ValorantGamer">
                <img src = {animeProgramming} className = "animeGif" alt = "This will display an animated gif for Valorant"/>
                    <Animator animation = {batch(FadeIn(), MoveIn(1000,0,100), MoveOut(-120), FadeOut(20))}>
                    <div className = "ValDescription">
                        <h5> I'm a Programmer by Day</h5>
                    </div>
                    </Animator>
                </div>
                <div className = "Programmer">
                    <img src = {Valorant} className = "valGif" alt = "This will display an animated gif for Programming"/>
   
                    <Animator animation = {batch(FadeIn(), MoveIn(-400,0,0), MoveOut(300), FadeOut(20))}>
                    <div className = "ProgramDescription">
                        <h5> and a Gamer by Night</h5>
                    </div>
                    </Animator>
                </div>
                </ScrollPage>
                </ScrollContainer>
                </div>
        </>
    );
}


export default Home;



