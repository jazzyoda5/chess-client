import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isLoggedin, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => isLoggedin ? <Component /> : <Redirect to='/' />}
        />
    );
}

export default PrivateRoute;