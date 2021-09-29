import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CountryPage from './views/CountryPage'
import CountryDetails from './views/CountryDetails';
import Error404 from './views/Error404'
import CapitalWeather from './views/CapitalWeather'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <CountryPage/>
        </Route>
        <Route path="/details/:name" exact>
          <CountryDetails/>
        </Route>
        <Route path="/capital/:capital" exact > 
        <CapitalWeather/>
        </Route>
        <Route component={Error404}/>
        
      </Switch>
    </BrowserRouter>
  );
};

export default App;
