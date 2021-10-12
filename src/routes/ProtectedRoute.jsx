import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem('auth_state')
					? <Component {...props} />
					: <Redirect
  to={{ pathname: '/login', state: { from: props.location } }}
						/>
      }}
		/>
  )
}
