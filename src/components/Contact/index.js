import './index.scss';
import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

function Contact() {
return (
    <>
    <div className = "container Contact-page">
        <h1>You can contact me by:</h1>
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