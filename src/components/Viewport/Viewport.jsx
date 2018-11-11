import React from 'react';

import './viewport.scss';

export default class Viewport extends React.Component {
    constructor(props) {
        super(props);
        this.canvasEl = React.createRef();
        this.state = {
            context: null
        }
    }

    componentDidMount() {
        if(!this.state.context) {
            let context = this.canvasEl.current.getContext("webgl");
            this.setState({
                context
            });

            context.clearColor(0.0, 0.0, 0.0, 1.0);
            context.clear(context.COLOR_BUFFER_BIT);
        }
    }

    render() {
        return (
            <div className="viewport">
                <canvas ref={this.canvasEl} className="viewport-canvas">
                    You don't have canvas
                </canvas>
            </div>
        );
    }
}