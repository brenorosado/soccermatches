import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Football data provided by the Football-Data.org API</p>
            <p>The free API account only provides 10calls/minute, so switching from league too fast may crash the app.</p>
        </div>
    );
};

export default Footer;