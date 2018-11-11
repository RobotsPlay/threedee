import React from 'react';

export default class Panel extends React.Component {
    render() {
        return (
            <div className="panelset-panel panelset-panel-sizeable">
                {this.props.children}
                <div draggable="true" class="panelset-panel-handle"></div>
            </div>
        )
    }
}