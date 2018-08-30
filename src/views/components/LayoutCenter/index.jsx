import React, { Fragment } from 'react';

import './layout.css';

const LayoutMiddle = () => (
    <Fragment>
        <section className="layout">
            <article className="text-align">
                <span>TEXT-ALIGN</span>
            </article>
        </section>
        <section className="layout">
            <article className="margin">
                <div>MARGIN BLOCK</div>
            </article>
        </section>
        <section className="layout">
            <article className="position-width">
                <div>POSITION & WIDTH</div>
            </article>
        </section>
        <section className="layout">
            <article className="position-transform">
                <div>POSITION & TRANSFORM</div>
            </article>
        </section>
        <section className="layout">
            <article className="flex">
                <div>FLEX BLOCK</div>
            </article>
        </section>
        <section className="layout">
            <article className="grid">
                <div>GRID BLOCK</div>
            </article>
        </section>
    </Fragment>
);

export default LayoutMiddle;
