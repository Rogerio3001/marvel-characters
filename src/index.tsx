import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Router, RouteComponentProps, Link } from '@reach/router'

import GlobalStyles from './styles/global'

import Signin from './screens/signin'
import Home from './screens/Home'

const HomeRoute = (props: RouteComponentProps) => Home(props)
const SigninRoute = (props: RouteComponentProps) => Signin(props)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <App /> */}
    <Router>
      <SigninRoute default path="/signin" />
      <HomeRoute path="/home" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
