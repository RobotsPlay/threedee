import React from 'react';

export default class Panel extends React.Component {
    render() {
        return (
            <div className={`${this.props.direction === 'vert' ? 'panelset-panel-sizeable-v' : ''} panelset-panel panelset-panel-sizeable`}>
                {this.props.children}
                <div draggable="true" className={`${this.props.direction === 'vert' ? 'panelset-panel-handle-v' : ''} panelset-panel-handle`}></div>
            </div>
        )
    }
}