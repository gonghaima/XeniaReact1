import React from 'react';
import { Link} from 'react-router';

const Drawer = () => {
    return (
        <div className="mdl-layout__drawer">
            <div className="inline-block">
                <button
                    className="menu-button android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect"
                    data-upgraded=",MaterialButton,MaterialRipple">
                    <i className="material-icons">clear</i>
                    <span className="mdl-button__ripple-container">
                        <span className="mdl-ripple is-animating"></span>
                    </span>
                </button>
                <span className="mdl-cell">
                    Menu
                </span>
            </div>

            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to="/about">About us</Link>
                <Link className="mdl-navigation__link" to="/vision">Out vision</Link>
                <a id="bookings_menu" className="mdl-navigation__link" href="#">Bookings</a>
                <a id="groups_menu" className="mdl-navigation__link" href="#">Groups</a>
                <a className="mdl-navigation__link" href="">Functions</a>
                <a className="mdl-navigation__link" href="">Interfaces</a>
                <a className="mdl-navigation__link" href="">Reports</a>
                <a className="mdl-navigation__link" href="">Company</a>
                <a className="mdl-navigation__link" href="">Contact</a>
            </nav>
        </div>
    );
};

export default Drawer;