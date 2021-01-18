import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import {useStateValue} from './components/StateProvider';
function App() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      {/* <h1>Slack clone</h1> */}
      <Router>
        {/* user login */}
        {
          !user ? (
            <Login />
          ) : (
          <>
        {/* <Header /> */}
        <Header />
        <div className="app_body">
          {/* <Sidebar /> */}
          <Sidebar />
          {/* Routing chat-app screen */}
          <Switch>
            <Route path="/rooms/:roomId">
              {/* <h1>Chat Screen</h1> */}
              {/* Chat */}
              <Chat />
            </Route>
            <Route path='/'>
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </>
      )}
      </Router>

    </div>
  );
}

export default App;
