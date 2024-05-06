import './App.css'
import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatbotScreen from './components/ChatBoxScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/ChatBotScreen" component={ChatbotScreen} />
      </Switch>
    </Router>
  );
};

export default App;



