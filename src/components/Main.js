require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HomeContent from '../components/home/content.jsx';
// var hc = require('../components/home/content');

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  
  componentWillMount() {
    console.log('before mt HomeContent: '+HomeContent);
  }
  componentDidMount() {
    console.log('after mt HomeContent: '+HomeContent);
  }
  
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout--fixed-header">
          <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">Title</span>

            <div className="mdl-layout-spacer"></div>
             <div className="mdl-layout-title">Xenia Suite</div>
            <div className="mdl-layout-spacer"></div>

            
            

<form action="#">
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
    <label className="mdl-button mdl-js-button mdl-button--icon" for="sample6">
      <i className="material-icons">search</i>
    </label>
    <div className="mdl-textfield__expandable-holder">
      <input className="mdl-textfield__input" type="text" id="sample6" />
      <label className="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
    </div>
  </div>
</form>




            
          </div></header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav></div>
        <main className="mdl-layout__content  demo-layout-transparent">
        
        <HomeContent/>
        
          
        </main>

        <footer className="mdl-mini-footer">
          <div className="mdl-mini-footer__left-section">
            <div className="mdl-logo">Title</div>
            <ul className="mdl-mini-footer__link-list">
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy & Terms</a></li>
            </ul>
          </div>
        </footer>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
