import React from 'react';

class AppComponent extends React.Component {
    render() {
        return (
            <span>
                {this.props.children}
            </span>
        )
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
