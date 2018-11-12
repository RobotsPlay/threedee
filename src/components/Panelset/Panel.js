import React from 'react';

export default class Panel extends React.Component {
    render() {
        return (
            <div className="panelset-panel panelset-panel-sizeable">
                {this.props.children}
                <div draggable="true" className="panelset-panel-handle"></div>
            </div>
        )
    }
}