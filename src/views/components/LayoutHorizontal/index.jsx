import React, { Fragment } from 'react';

import './layout.css';

const LayoutHorizontal = () => (
    <Fragment>
        <div className="three">
            <section className="layout">
                <article className="float">
                    <div className="left">Float Layout Left Content</div>
                    <div className="right">Right Content</div>
                    <div className="center">Center Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="position">
                    <div className="left">Position Layout Left Content</div>
                    <div className="center">Center Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="table">
                    <div className="left">Table Layout Left Content</div>
                    <div className="center">Center Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="flex">
                    <div className="left">Flex Layout Left Content</div>
                    <div className="center">Center Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="grid">
                    <div className="left">Grid Layout Left Content</div>
                    <div className="center">Center Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
        </div>
        <div className="two">
            <section className="layout">
                <article className="float">
                    <div className="left">Float Layout Left Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="position">
                    <div className="left">Position Layout Left Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="table">
                    <div className="left">Table Layout Left Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="flex">
                    <div className="left">Flex Layout Left Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="grid">
                    <div className="left">Grid Layout Left Content</div>
                    <div className="right">Right Content</div>
                </article>
            </section>
        </div>
    </Fragment>
);

export default LayoutHorizontal;
