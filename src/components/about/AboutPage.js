import React, {Component, PropTypes} from 'react';

class AboutPage extends Component {
    constructor(props) {
        super(props);

    }


    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {}

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return (
            <main className="mdl-layout__content  demo-layout-transparent" style={{background: `url(../images/about.png) center`, backgroundRepeat: 'no-repeat'}}></main>
        );
    }
}

AboutPage.propTypes = {};

export default AboutPage;