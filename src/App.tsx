import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/login/Login'
import LoginHooks from './components/login/LoginHooks'
import LoginRedux from './components/login/LoginRedux'
import LoginReduxHooks from './components/login/LoginReduxHooks'
import Home from './Home'
import LoginReduxSagaHooks from './components/login/LoginReduxSagaHooks';
import LoginReduxSagaHooksRefs from './components/login/LoginReduxSagaHooksRefs';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/login-redux">Login Redux</Link></div>
        <div><Link to="/login-hooks">Login with hooks</Link></div>
        <div><Link to="/login-redux-hooks">Login with redux hooks</Link></div>
        <div><Link to="/login-redux-saga-hooks">Login with redux saga hooks</Link></div>
        <div><Link to="/login-redux-saga-hooks-refs">Login with redux saga hooks refs</Link></div>
        <Switch>
          <Route path="/login-hooks" component={LoginHooks} />
          <Route path="/login-redux" component={LoginRedux} />
          <Route path="/login-redux-hooks" component={LoginReduxHooks} />
          <Route path="/login-redux-saga-hooks" component={LoginReduxSagaHooks} />
          <Route path="/login-redux-saga-hooks-refs" component={LoginReduxSagaHooksRefs} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
