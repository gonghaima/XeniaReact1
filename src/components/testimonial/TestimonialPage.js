import React, { Component } from 'react';
import DrawerHelper from '../common/services/DrawerHelper';
import ApiService from '../common/services/ApiService';
import renderHTML from 'react-render-html';

class TestimonialPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topSection: 'top',
            bottomSectoin: 'bottom'
        };
        var that = this;
        let { testimonialContentPromise } = ApiService();

        testimonialContentPromise
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                that.setState({
                    topSection: data.items[0].top,
                    bottomSection: data.items[0].bottom
                });
            })
            .catch(err => {
                throw err;
            });
    }

    componentDidUpdate() {
        let drawerHelper = new DrawerHelper(document);
        drawerHelper.close();
    }

    convertToHTML(input){
        if(input) return renderHTML(input);
        return '';
    }

    render() {
        return (
            <main
                className='mdl-layout__content  demo-layout-transparent'
                style={{
                    background: 'url(../images/testimonials9.jpg) right',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: '#262626'
                }}>
                <div className="mdl-grid margin-top-3-percent">
                    <div
                        className="mdl-cell mdl-cell--3-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone"
                        style={{
                            backgroundColor: '#262626',
                            padding: '22px'
                        }}>

                        {this.convertToHTML(this.state.topSection)}
                    </div>
                </div>
                <div className="mdl-grid margin-top-3-percent">
                    <div
                        className="mdl-cell mdl-cell--4-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone"
                        style={{
                            backgroundColor: '#262626',
                            padding: '22px'
                        }}>
                       {this.convertToHTML(this.state.bottomSection)}
                    </div>
                </div>

            </main>
        );
    }
}

export default TestimonialPage;
