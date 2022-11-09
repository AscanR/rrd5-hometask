import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Users from "./components/pages/Users";
import MainPage from "./components/pages/MainPage";
import SwitchNavbarLinksProvider from "./hooks/SwitchNavbarLinks";
import Navbar from "./components/navbars/Navbar";

const App = () => {
    return (
          <>
              <SwitchNavbarLinksProvider>
                  <Navbar/>
                  <Switch>
                      <Route path='/' exact component={MainPage}/>
                      <Route path='/users/:userId?/:edit?' component={Users}/>
                      <Redirect to="/"/>
                  </Switch>
              </SwitchNavbarLinksProvider>
          </>
    );
};

export default App;

