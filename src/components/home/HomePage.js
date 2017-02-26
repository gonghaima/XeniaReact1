import React, {Component} from 'react';
import Footer from '../common/Footer';

class HomePage extends Component {
    constructor(props) {
        super(props);

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
                <Footer/>
            </div>
        );
    }
}

export default HomePage;