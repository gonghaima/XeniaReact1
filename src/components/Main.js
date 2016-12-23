require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HomeContent from '../components/home/content.jsx';

class AppComponent extends React.Component {

  componentWillMount() {
    console.log('before mt HomeContent: ' + HomeContent);
  }
  componentDidMount() {
    console.log('after mt HomeContent: ' + HomeContent);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout--fixed-header">
          <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">Menu</span>

            <div className="mdl-layout-spacer"></div>
            <div className="mdl-layout-title">Xenia Suite</div>
            <div className="mdl-layout-spacer"></div>




            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                  <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                  <input className="mdl-textfield__input" type="text" id="sample6" />
                  <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
                </div>
              </div>
            </form>







          </div></header>
        <div className="mdl-layout__drawer">

          <div className="inline-block">

            <button className="menu-button android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">
              <i className="material-icons">clear</i>
              <span className="mdl-button__ripple-container"><span className="mdl-ripple is-animating"></span></span>
            </button>
            <span className="mdl-cell">
              Menu
</span>

          </div>



          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Bookings</a>
            <a className="mdl-navigation__link" href="">Groups</a>
            <a className="mdl-navigation__link" href="">Functions</a>
            <a className="mdl-navigation__link" href="">Interfaces</a>
            <a className="mdl-navigation__link" href="">Reports</a>
            <a className="mdl-navigation__link" href="">Company</a>
            <a className="mdl-navigation__link" href="">Contact</a>
          </nav></div>
        <main className="mdl-layout__content  demo-layout-transparent">

          <HomeContent />


        </main>

        <footer className="mdl-mini-footer">
          <div className="mdl-layout-spacer"></div>
          <div className="trapezoid">
            <div className="innertrapezoidinner">
              The Software, for all Medium to Large Motels, Hotels and Hotel Groups.
          </div>
          </div>
          <div className="mdl-layout-spacer"></div>
        </footer>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
