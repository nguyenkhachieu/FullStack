import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const LandingRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(rest)
      if (!rest.user || (rest.user && !rest.user.token)) {
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }

      if (rest.user) {
        return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />;
      }
    }}
  />
);
export default LandingRoute;
