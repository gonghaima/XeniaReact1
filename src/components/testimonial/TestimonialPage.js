import React, {Component, PropTypes} from 'react';



class TestimonialPage extends Component {
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
            <main className="mdl-layout__content  demo-layout-transparent" style={{background: `url(../images/testimonials.png) center`, backgroundRepeat: 'no-repeat'}}></main>
        );
    }
}

TestimonialPage.propTypes = {};


const styles = {
  bgimg: {
    background: `url(../images/testimonials.png) center`
  },
  bgrepeat:{
      'background-repeat': 'no-repeat'
  }
};
export default TestimonialPage;