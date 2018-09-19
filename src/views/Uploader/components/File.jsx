import React, { Component } from 'react';
import {
    Upload, message, Button, Icon
} from 'antd';

export default class File extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
    }
    onFileChange(info) {
        // if (info.file.status !== 'uploading') {
        //     console.log(info.file, info.fileList);
        // }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        }
        else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
    render() {
        return (
            <article className='article'>
                <h1>File Upload</h1>
                <Upload name='file' action='//jsonplaceholder.typicode.com/posts' onChange={this.onFileChange}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </article>
        );
    }
}
