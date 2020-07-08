import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";

import {ProfileCard} from './Components/Cards';

// import { 
//  } from './Components/Pages';


function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/">
            <ProfileCard/>
            
          </Route>
      </Switch>
    </div>
  );
}

export default App;

