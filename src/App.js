import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Index from './pages/Index';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
