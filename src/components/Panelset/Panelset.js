import React from 'react';

import Panel from './Panel.js';

import './panelset.scss'

export default class Panelset extends React.Component {
    getGridTemplate(direction = 'columns') {
        let template = '';
        let templateRule = 'grid-template-columns';
        let rule = {}
        this.props.children.forEach(() => template += '1fr ');
        rule[templateRule] = template;
        return rule;
    }
    
    render() {
        return (
            <div className="panelset" style={this.getGridTemplate()}>
                {
                    this.props.children.map((child) => {
                        return (
                            <Panel>{child}</Panel>
                        );
                    })
                }
            </div>
        )
    }
}