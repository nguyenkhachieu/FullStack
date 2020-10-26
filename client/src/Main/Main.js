import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginRoute from '../Router/LoginRoute';
import FormLogin from '../components/Login/Login';
import LandingRoute from '../Router/LandingRoute';
import SignUp from '../components/Signup/SignUp';

const Main = ({user}) => {
  return (
    <div>
      <Switch>
        <LandingRoute exact path={'/'} component={() => { }} user={user} />
        <LoginRoute path={'/login'} component={FormLogin} />
        <LoginRoute path={'/signup'} component={SignUp} />
      </Switch>
    </div>
  )
}

export default Main;