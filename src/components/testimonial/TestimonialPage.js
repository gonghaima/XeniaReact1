import React, {Component, PropTypes} from 'react';



class TestimonialPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="mdl-layout__content  demo-layout-transparent" style={{background: `url(../images/testimonials.png) center`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}></main>
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