import React from 'react';

import './layout.css';

const LayoutVertical = () => (
    <div className="wrap">
        <div className="three">
            <section className="layout">
                <article className="position">
                    <div className="top">Position Layout Top Content</div>
                    <div className="middle">Middle Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="table">
                    <div className="top">Table Layout Top Content</div>
                    <div className="middle">Middle Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="flex">
                    <div className="top">Flex Layout Top Content</div>
                    <div className="middle">Middle Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="grid">
                    <div className="top">Grid Layout Top Content</div>
                    <div className="middle">Middle Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
        </div>
        <div className="two">
            <section className="layout">
                <article className="position">
                    <div className="top">Position Layout Top Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="table">
                    <div className="top">Table Layout Top Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="flex">
                    <div className="top">Flex Layout Top Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
            <section className="layout">
                <article className="grid">
                    <div className="top">Grid Layout Top Content</div>
                    <div className="bottom">Bottom Content</div>
                </article>
            </section>
        </div>
    </div>
);
export default LayoutVertical;
