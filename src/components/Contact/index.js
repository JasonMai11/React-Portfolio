import './index.scss';
import React from 'react';
import contactAnime from '../../assets/images/contactInfoAnimeGif.gif';
import RingLoader from 'react-spinners/RingLoader';

function Contact() {
return (
    <>
    <div className = "container Contact-page">
        <img src = {contactAnime} alt = "anime gif sharing messages"></img>
        <h1>Contact information:</h1>

        <h2>Name: <i>Jason Mai</i></h2>
        <h2>Email : <i>maijason112102@gmail.com</i></h2>

        <h2></h2>

    </div>
    
    <div className = 'disappear2'>
        <div className = 'ringLoader'>
            <RingLoader />
        </div>
    </div>
    </>
    
);
}

export default Contact;