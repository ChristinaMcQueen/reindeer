// eslint-disable-next-line
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../common/Layout';
import Home from '../views/Home';
import Lifecircle from '../views/Lifecircle';
import NotFound from '../views/NotFound';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/lifecircle" component={Lifecircle} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Router;
