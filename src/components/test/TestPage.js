import React, {Component} from 'react';
import DrawerHelper from '../common/services/DrawerHelper';

class TestPage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidUpdate() {
        let drawerHelper = new DrawerHelper(document);
        drawerHelper.toggle();
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

                        <p>I have been managing Hotels and Motels for over 30 years and I have never had
                            support like I have received over the last 5 years from this company. It was
                            really outstanding. Day or night, summer or winter the phone is always answered
                            with a smile in the voice and eagerness to help Thanks so much for making my job
                            easier
                        </p>
                        <p className='margin-0'>Gail</p>
                        <p className='margin-0'>Hotel Manager</p>
                        <p className='margin-0'>Wellington</p>
                    </div>
                </div>
                <div className="mdl-grid margin-top-3-percent">
                        <div
                            className="mdl-cell mdl-cell--4-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone"
                            style={{
                            backgroundColor: '#262626',
                            padding: '22px'
                        }}>
                            <p>It was 9 o’clock at night, the Hotel was full, storms everywhere, then
                                lightening struck and the power surge took out all of our computers. The Server
                                would not start up. So put out an SOS to support expecting them to reply with a
                                promise of help the next day. Instead 3 and half hours later the support staff
                                turned up with a temporary Server in the car. Checked out our gear then pulled
                                the power supply out of their temporary unit, put it into our Server and had us
                                back up and running by 4:00 am. Then had a coffee with us while the Night Audit
                                ran. Once that was done, they left to drive back home, through the storm.
                            </p>
                            <p className='margin-0'>Mark</p>
                            <p className='margin-0'>Motel Manager</p>
                            <p className='margin-0'>Manawatu</p>
                        </div>
                    </div>

            </main>
        );
    }
}

export default TestPage;