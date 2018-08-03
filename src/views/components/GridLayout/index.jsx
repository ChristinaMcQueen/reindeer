import React from 'react';

import './gridlayout.css';

const GridLayout = () => (
    <div className="grid-layout">
        <div className="header">Header</div>
        <div className="sidebar">Sidebar</div>
        <div className="content">
            Content
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="footer">Footer</div>
    </div>
);

export default GridLayout;
