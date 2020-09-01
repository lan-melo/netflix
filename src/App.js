import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import GlobalStyle from './style/global';

import User from './components/User';
import Main from './components/Main';

class App extends Component{
  render() {
    return (
      <>
        
        <Switch>
          <Route path="/browser" component={User} />
          <Route path="/main" component={Main} />
        </Switch>

        <GlobalStyle />
      </>
    );
  }
}

export default App;
