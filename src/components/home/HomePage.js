import React, { Component } from 'react';
import Footer from '../common/Footer';
import ApiService from '../common/services/ApiService';
import Popup from 'react-popup';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 'Xinia'
        };
        var that=this;
let {footerUrl}= ApiService();
fetch(footerUrl).then(function (response) {
  return response.json();
}).then(function (data) {
  that.setState({ offset: data.subtitle });
}).catch(err=>{
throw new err;
});

    }

    componentDidMount(){
        Popup.alert('Let\'s talk today');
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
                <Popup />
                <Footer footer_text={this.state.offset} />
            </div>
        );
    }
}

export default HomePage;
