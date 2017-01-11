require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HomeContent from '../components/home/content.jsx';
import Header from './common/Header';
import Footer from './common/Footer';

class AppComponent extends React.Component {

  componentWillMount() {

  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
          <Header />
          <div className="mdl-layout__drawer">
              <div className="inline-block">

                  <button className="menu-button android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect"
                      data-upgraded=",MaterialButton,MaterialRipple">
                    <i className="material-icons">clear</i>
                    <span className="mdl-button__ripple-container"><span className="mdl-ripple is-animating"></span></span>
                  </button>
                  <span className="mdl-cell">
                    Menu
                  </span>

              </div>

              <nav className="mdl-navigation">
                  <a id="bookings_menu" className="mdl-navigation__link" href="#">Bookings</a>
                  <a id="groups_menu" className="mdl-navigation__link" href="#">Groups</a>
                  <a className="mdl-navigation__link" href="">Functions</a>
                  <a className="mdl-navigation__link" href="">Interfaces</a>
                  <a className="mdl-navigation__link" href="">Reports</a>
                  <a className="mdl-navigation__link" href="">Company</a>
                  <a className="mdl-navigation__link" href="">Contact</a>
              </nav>
          </div>

          <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect" htmlFor="bookings_menu">
              <li className="mdl-menu__item">Bookings</li>
              <li className="mdl-menu__item">Split Bookings</li>
              <li disabled className="mdl-menu__item">Bump Bookings</li>
              <li className="mdl-menu__item">Check in/out</li>
          </ul>

          <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect" htmlFor="groups_menu">
              <li className="mdl-menu__item">Enquiries and Quotes</li>
              <li className="mdl-menu__item">Group Bookings</li>
              <li disabled className="mdl-menu__item">Tour Packages</li>
          </ul>

          <main className="mdl-layout__content  demo-layout-transparent">
              <HomeContent />
          </main>

          <Footer />
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
