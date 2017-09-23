import React from 'react';

const Footer = ({footer_text}) => {
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
                    {footer_text}
                </div>
            </div>
            <div className="mdl-layout-spacer"></div>
        </footer>
    );
};

export default Footer;