import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './containers/MainPage';

const Routes = () => (
  <Switch>
    <Route exact path="/video-preview" component={MainPage}/>
    <Route exact path="/" component={MainPage}/>
  </Switch>
);

export default Routes;
