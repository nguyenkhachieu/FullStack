import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const LoginRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (rest.user && rest.user.token) {
                return <Redirect to={{ pathname: `/home`, state: { from: props.location } }}/>;
            } else {
                return (<Component {...props} {...rest} />);
            }
        }}
    />
);
export default LoginRoute;
