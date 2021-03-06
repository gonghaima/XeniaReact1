import React, {Component} from 'react';
import DrawerHelper from '../common/services/DrawerHelper';

class VisionPage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidUpdate() {
        let drawerHelper=new DrawerHelper(document);
        drawerHelper.toggle();
    }

    render() {
        return (
            <main
                className='mdl-layout__content  demo-layout-transparent'
                style={{
                background: 'url(../images/vision.png) center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}></main>
        );
    }
}

export default VisionPage;