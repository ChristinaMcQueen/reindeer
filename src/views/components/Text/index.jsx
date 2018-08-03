import React, { Component } from 'react';

import './text.css';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?',
            oneline: 'If I exceed one line\'s width, I will be truncated.'
        };
    }
    render() {
        return (
            <div className='text'>
                <section className='custom-selection'>
                    <p>Custom Selection</p>
                </section>
                <section className='unselectable'>
                    <p>Unselectable</p>
                </section>
                <section className='etched-wrap'>
                    <p className='etched-text'>I appear etched into the background.</p>
                </section>
                <section className='gradient-wrap'>
                    <p className='gradient-text'>{this.state.content}</p>
                </section>
                <section>
                    <div className='hairline-border'>text</div>
                </section>
                <section>
                    <p className='pretty-text-underline'>{this.state.content}</p>
                </section>
                <section>
                    <p className='truncate-text'>{this.state.oneline}</p>
                </section>
                <section>
                    <p className='multi-truncate-clamp' style={{ WebkitBoxOrient: 'vertical' }}>{this.state.content}</p>
                </section>
                <section>
                    <div className='ellipsis'>
                        <div className='ellipsis-container'>
                            <div className='ellipsis-content'>{this.state.content}{this.state.content}{this.state.content}</div>
                            <div className='ellipsis-ghost'>
                                <div className='ellipsis-placeholder'></div>
                                <div className='ellipsis-more'>...more</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
