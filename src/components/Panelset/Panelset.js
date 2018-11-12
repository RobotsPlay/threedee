import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './Panel.js';

import './panelset.scss'

export default class Panelset extends React.Component {
    constructor(props) {
        super(props);
        this.panelRefs = [];
        this.panelsetRef = React.createRef();
        this.state = {
            gridTemplate : {}
        }
    }

    componentDidMount() {
        this.setGridTemplate();
    }

    setGridTemplate(panel = null, axisOffset = 0) {
        let template = '';
        let templateRule = 'gridTemplateColumns';
        let rule = {}
        
        if(panel) {
            this.panelRefs.forEach((panelRef) => {
                let panelRefNode = ReactDOM.findDOMNode(panelRef.current);
                if(panel === panelRefNode) {
                    let newWidth = ((axisOffset - panelRefNode.offsetLeft) / this.panelsetRef.current.offsetWidth);
                    template += `${newWidth * 100}% `;
                }
                else if(panel.nextElementSibling === panelRefNode) {
                    template += '1fr ';   
                }
                else {
                    template += `${(panelRefNode.offsetWidth / this.panelsetRef.current.offsetWidth) * 100}% `;
                }
            });
        }
        else {
            this.props.children.forEach(() => template += '1fr ');
        }
        
        rule[templateRule] = template;
        this.setState({gridTemplate: rule});
    }

    isChildPanel(panel) {
        let isChild = false;
        this.panelRefs.forEach((childPanel) => {
            if(ReactDOM.findDOMNode(childPanel.current) == panel) {
                isChild = true;
            }
        });
        return isChild;
    }

    onDragStartHandle(e) {
        let panel = e.target.parentElement;
        if(panel.classList.contains('panelset-panel-handle') || !this.isChildPanel(panel)) {
            return false;
        }
        console.log('Drag Start');
        e.dataTransfer.setDragImage(document.createElement('img'), 0, 0)
    }

    onDragHandle(e) {
        let panel = e.target.parentElement;
        if(panel.classList.contains('panelset-panel-handle') || !this.isChildPanel(panel)) {
            return false;
        }

        this.setGridTemplate(panel, e.clientX);
    }

    render() {
        this.panelRefs = [];

        return (
            <div className="panelset"
                ref={this.panelsetRef}
                style={this.state.gridTemplate} 
                onDragStart={(e) => {this.onDragStartHandle(e)}}
                onDrag={(e) => {this.onDragHandle(e)}}
                onDragEnd={(e) => {this.onDragHandle(e)}}
            >
                {
                    this.props.children.map((child, i) => {
                        let panelRef = React.createRef();
                        this.panelRefs.push(panelRef);
                        return (
                            <Panel ref={panelRef} key={i}>{child}</Panel>
                        );
                    })
                }
            </div>
        )
    }
}