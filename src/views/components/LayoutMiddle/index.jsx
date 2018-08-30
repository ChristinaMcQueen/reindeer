import React, { Fragment } from 'react';

import './layout.css';

const LayoutMiddle = () => (
    <Fragment>
        <section className="layout">
            <article className="line-height">
                <span>LINE-HEIGHT: ONLY ONE LINE WORKS!!</span>
            </article>
        </section>
        <div className="cell-wrap">
            <section className="layout">
                <article className="padding">
                    <span>
                        PADDING INLINE PADDING INLINE
                        PADDING INLINE PADDING INLINE
                        PADDING INLINE PADDING INLINE
                        PADDING INLINE PADDING INLINE
                        PADDING INLINE PADDING INLINE
                    </span>
                </article>
            </section>
            <section className="layout">
                <article className="padding">
                    <div>PADDING BLOCK</div>
                </article>
            </section>
        </div>
        <div className="cell-wrap">
            <section className="layout">
                <article className="table">
                    <span>
                    TABLE INLINE TABLE INLINE TABLE INLINE
                    TABLE INLINE TABLE INLINE TABLE INLINE
                    TABLE INLINE TABLE INLINE TABLE INLINE
                    TABLE INLINE TABLE INLINE TABLE INLINE
                    </span>
                </article>
            </section>
            <section className="layout">
                <article className="table">
                    <div>TABLE BLOCK</div>
                </article>
            </section>
        </div>
        <section className="layout">
            <article className="position-height">
                <div>POSITION & HEIGHT</div>
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
