import React, {Component, PropTypes} from 'react';

class AboutPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="mdl-layout__content  demo-layout-transparent" style={{background: `url(../images/about.png) center`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}></main>
        );
    }
}

AboutPage.propTypes = {};

export default AboutPage;