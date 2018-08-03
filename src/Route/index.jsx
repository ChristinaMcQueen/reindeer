// eslint-disable-next-line
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../common/Layout';
import NotFound from '../views/NotFound';
import RouterConfig from './config';


const Router = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                {RouterConfig.map(item => <Route
                    key={item.name}
                    path={item.path}
                    exact={item.path === '/'}
                    component={item.component}
                />)}
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Router;
