import React from 'react';

const Footer = () => {
    return (
        <footer
            className="mdl-mini-footer"
            style={{
            position: 'absolute',
            width: '100%',
            bottom: '0'
        }}>
            <div className="mdl-layout-spacer"></div>
            <div className="trapezoid">
                <div className="innertrapezoidinner">
                    The Software, for all Medium to Large Motels, Hotels and Hotel Groups.
                </div>
            </div>
            <div className="mdl-layout-spacer"></div>
        </footer>
    );
};

export default Footer;