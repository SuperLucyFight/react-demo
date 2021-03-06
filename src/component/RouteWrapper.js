import React from 'react';
import {Route} from 'react-router-dom'
const RouteWrapper = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<Component {...rest} {...props} />)
      }}
    />
  )
}

export default RouteWrapper;
