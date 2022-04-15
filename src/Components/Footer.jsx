import React from "react";
import './footer.css'

import instagram from './image/instagram.png'
import telegram from './image/telegram.png'

const Footer = () => {
    return(
        <div className="footer">
            <a className="contact" href="http://"><img src={instagram} alt="" /></a>
            <a className="contact" href="http://"><img src={telegram} alt="" /></a>
        </div>
    )
}

export default Footer