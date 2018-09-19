import React, { Component } from 'react';

export default class CustomImage extends Component {
    render() {
        return (
            <article className='article'>
                <h1>Custom Image Upload</h1>
                <input type='file' />
            </article>
        );
    }
}
