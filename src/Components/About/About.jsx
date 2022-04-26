import React from "react";

import image from '../image/about.jpg'

import './about.css'


const About = () => {
    return (
        <div className="about-page">
            <img src={image} alt="" />
            <div>
                <div className="first">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nemo sequi molestiae, iure fugit est? Rerum pariatur, porro debitis eum eaque voluptates delectus consequatur doloremque accusamus distinctio quo fuga repellendus?</div>
                <div className="second">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus numquam similique nulla perferendis qui ipsum cum modi adipisci! Magni quo ipsum, numquam pariatur rem quisquam animi fuga optio iste quibusdam.</div>
            </div>
        </div>
    
    )
}

export default About