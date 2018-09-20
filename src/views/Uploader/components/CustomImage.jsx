import React, { Component } from 'react';
import { Icon } from 'antd';

export default class CustomImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: '',
            previewName: ''
        };
        this.formData = new FormData();
        this.reader = new FileReader();
        this.input = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reader.onload = this.handleReaderLoad.bind(this);
    }
    handleClick() {
        this.input.current.click();
    }
    handleInputClick() {
        // console.log('------------------------------------');
        // console.log(this.input);
        // console.log('------------------------------------');
    }
    handleChange() {
        const imgData = this.input.current.files[0];
        this.formData.append('image', imgData);
        this.reader.readAsDataURL(imgData);
    }
    handleReaderLoad(e) {
        console.log('------------------------------------');
        console.log(e.target);
        console.log('------------------------------------');
        this.setState({
            preview: e.target.result
        });
    }
    handleImgLoad() {
        this.canvasImg.drawImage(this.img, 0, 0);
    }
    componentDidMount() {
        this.canvasImg = this.refs.canvas.getContext('2d');
        // this.refs.img.onload = () => {
        //     this.canvasImg.drawImage(this.img, 0, 0);
        // };
    }
    render() {
        return (
            <article className='article'>
                <h1>Custom Image Upload</h1>
                <div className='img-container'>
                    <canvas ref='canvas'></canvas>
                    <img
                        className='preview'
                        ref='img'
                        onLoad={this.imgLoad}
                        src={this.state.preview}
                        alt={this.state.previewName || 'preview'}
                    />
                </div>
                <div className='custom-upload' onClick={this.handleClick}>
                    <Icon type="plus" />
                    <p>Upload</p>
                    <input
                        type='file'
                        className='input'
                        ref={this.input}
                        onClick={this.handleInputClick}
                        onChange={this.handleChange}
                    />
                </div>
            </article>
        );
    }
}
