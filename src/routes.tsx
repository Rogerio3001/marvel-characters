import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom'

import Home from './screens/Home'
import Signin from './screens/signin'
import CharacterDetails from './screens/characterDetails'
import { useSelector } from 'react-redux'
import { StoreState } from './store/createStore'

interface PrivateRouteProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props
  const { isSignedIn } = useSelector((state: StoreState) => state.auth)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  )
}
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/sign-in" component={Signin} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/details/:id" component={CharacterDetails} />
      </Switch>
    </BrowserRouter>
  )
}
