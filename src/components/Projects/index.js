import './index.scss'
import NoteTakersGif from '../../assets/images/NoteTakersGif.gif'
import ParstagramGif from '../../assets/images/ParstagramGif.gif'

const Projects = () => { 
    return (
        <>
        <div className = 'container projects-page'>

            <div className = 'iOS-projects'>
                <p> iOS Projects : </p>
                    <li>College MarketPlace</li>
                    <ul> - TBD </ul>

                    <li>Room8</li>
                    <ul> - TBD </ul>

                    <div className = "ParstagramDescription">
                    <li>Parstagram</li>
                    <ul><a href = "https://github.com/JasonMai11/Parstagram" id = "ParstagramLink"> - GitHub for Parstagram</a></ul>
                    <ul>This is an Instagram clone with a custom Parse backend that allows a user to post photos and view a global photos feed. </ul>
                    </div>
                    <div className = "ParstagramGiff">
                        <img src= {ParstagramGif} alt = "This will display an animated gif for Parstagram"/>
                    </div>

                    <div className = 'NoteTakersDescription'>
                    <li>NoteTakers</li>
                    <ul><a href = "https://github.com/AshaJG/iOS_NoteTaking" id = "NoteTakersLink"> - GitHub for NoteTakers</a></ul>
                    <ul>A note taking app where others can share notes from their enrolled college courses to help those who want or need information on a subject of the course that they have missed out on or strengthen their knowledge.</ul>
                    </div>
                    <div className = 'NoteTakersGiff'>
                        <img src = {NoteTakersGif} alt = "This will display an animated gif for NoteTakers"/>
                    </div>

            </div>

            <br />

            <div className = 'Scala-projects'>
                <p> Scala Projects :</p>
                    <li>Genetic Algorithm</li>
                    <ul><a href = "https://github.com/JasonMai11/Genetic-Algorithm" id = "GeneticAlgorithmLink"> - GitHub for Genetic Algorithm</a></ul>
                    <ul>Made an algorithm that solved optimization problems quickly without specifically knowing how to solve the problem itself and without needing waste unnecessary time searching for the solution.</ul>

                    <div className='Microwave-text'>
                        <li>Object Oriented Program (OOP) Microwave</li>
                        <ul><a href = "https://github.com/JasonMai11/OOP-Microwave" id = "MicrowaveLink"> - GitHub for OOP-Microwave</a></ul>
                        <ul>Developed an application which mimics a microwave that utilizes Object Oriented Programming.</ul>
                    </div>
            </div>

            <br />

            <div className = 'Python-projects'>
                <p> Python Projects : </p>
                    <li>MineSweeper (with Solving Algorithm)</li>
                    <ul>Try it out Here!</ul>
                    <br />
                    <li>PathFinding Visualization</li>
                    <ul>Try it out Here!</ul>
            </div>

            <br />

            <div className = 'Other-projects'>
                <p> Other Projects : </p>
                    <li>Portfolio Site (current destination)</li>
            </div>

        </div>

        <div class='disappear'>
            <div class="spinner"></div>
        </div>
        </>
    )
}

export default Projects