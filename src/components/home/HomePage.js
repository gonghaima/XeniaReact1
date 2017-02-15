import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Drawer from '../common/drawer/Drawer';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {
    componentWillUnmount(){
        const bb= document.getElementsByClassName('mdl-layout')[0];
        // bb.parentNode.removeChild(bb);
        // console.log('unmounting....');
        debugger;
        // ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
        // debugger;
        // React.unmountComponentAtNode(document.getElementsByClassName('mdl-js-layout'));
        this._reactInternalInstance.unmountComponent(bb);
    }
    
    render() {
        return (
            <div className="mdl-layout mdl-js-layout">
                <Header/>
                <Drawer />
                <ul
                    className="mdl-menu mdl-js-menu mdl-js-ripple-effect"
                    htmlFor="bookings_menu">
                    <li className="mdl-menu__item">Bookings</li>
                    <li className="mdl-menu__item">Split Bookings</li>
                    <li disabled className="mdl-menu__item">Bump Bookings</li>
                    <li className="mdl-menu__item">Check in/out</li>
                </ul>

                <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect" htmlFor="groups_menu">
                    <li className="mdl-menu__item">Enquiries and Quotes</li>
                    <li className="mdl-menu__item">Group Bookings</li>
                    <li disabled className="mdl-menu__item">Tour Packages</li>
                </ul>

                <main className="mdl-layout__content  demo-layout-transparent">
                </main>

                <Footer/>
            </div>
        );
    }
}

export default HomePage;