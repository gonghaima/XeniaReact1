import React, { Component } from 'react';
import Footer from '../common/Footer';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 'Xinia'
        };

        var that= this;

        fetch('/people').then(function (response) {
            return response.json();
        }).then(function (data) {
            that.setState({ offset: data.subtitle });
        }).catch(err=>{
          throw new err;
        });
    }

    render() {
        return (
            <div
                className='mdl-layout__content  demo-layout-transparent'
                style={{
                    background: 'url(../images/header.png) center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    position: 'relative'
                }}>
                <Footer footer_text={this.state.offset} />
            </div>
        );
    }
}

export default HomePage;
