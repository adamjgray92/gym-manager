import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MembersScreen from './pages/Members';
import LoginScreen from './pages/Login';

const App = () => {
  return (
    <div className='h-screen antialiased'>
      <Router>
        <Route path='/' exact component={LoginScreen} />
        <Route path='/members' component={MembersScreen} />
      </Router>
    </div>
  );
};

export default App;
