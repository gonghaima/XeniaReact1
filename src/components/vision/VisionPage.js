import React, {Component, PropTypes} from 'react';

class VisionPage extends Component {
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
            <main className="mdl-layout__content  demo-layout-transparent" style={{background: `url(../images/vision.png) center`, backgroundRepeat: 'no-repeat'}}></main>
        );
    }
}

VisionPage.propTypes = {};

export default VisionPage;