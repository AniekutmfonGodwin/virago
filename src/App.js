import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import { ProfileSection } from "./Components/Layouts";
import {ProfileCard,ProfileListCard} from './Components/Cards';

import FolderIcon from '@material-ui/icons/Folder';
import { Avatar } from '@material-ui/core';
import { 
  ProfilePage
 } from './Components/Pages';


function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/">
            {
              <ProfilePage/>||
              <ProfileListCard secondaryText="secondary"
              actionIcon={<FolderIcon />}
              listIcon={<Avatar variant="square"  />}
              />||
              <ProfileSection heading="This is ">
                hhjh
              </ProfileSection>
              ||
              <ProfileCard/>}
            
          </Route>
      </Switch>
    </div>
  );
}

export default App;

