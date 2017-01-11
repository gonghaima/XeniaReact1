import React from 'react';

const Header = () => {
    return (
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
              </div>
          </header>
    );
};

export default Header;