import React, { Component } from 'react';

import File from './components/File';
import Image from './components/Image';
import CustomImage from './components/CustomImage';
import './upload.css';

export default class Uploader extends Component {
    render() {
        return (
            <section className='uploader'>
                <File />
                <Image />
                <CustomImage />
            </section>
        );
    }
}
