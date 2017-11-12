import React, { Component } from 'react';
import DrawerHelper from '../common/services/DrawerHelper';
import renderHTML from 'react-render-html';
import ApiService from '../common/services/ApiService';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyContent: 'locallocallocallocal'
    };

    var that = this;

    let {aboutContentPromise}= ApiService();

    aboutContentPromise
      .then(function(response) {
        debugger
        return response.text();
      })
      .then(function(data) {
        that.setState({ historyContent: data.replace('{ htmlText = ','').replace('}','')});
      })
      .catch(err => {
        throw err;
      });
  }

  componentDidUpdate() {
    let drawerHelper = new DrawerHelper(document);
    drawerHelper.close();
  }

  render() {
    return (
      <main
        className="mdl-layout__content  demo-layout-transparent"
        style={{
          background: 'url(../images/about.png) center right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundColor: '#262626',
          fontFamily: 'Calibri'
        }}
      >
        <div className="mdl-grid">
          <div
            className="mdl-cell mdl-cell--5-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone about-page"
            style={{ backgroundColor: '#262626' }}
          >
            <h1
              className="mdl-layout-title"
              style={{ color: '#E22B00', fontWeight: 'bold' }}
            >
              History
            </h1>

            {renderHTML(this.state.historyContent)}
          </div>
        </div>
      </main>
    );
  }
}

export default AboutPage;
