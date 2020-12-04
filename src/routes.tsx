import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './screens/Home'
import Signin from './screens/signin'
import CharacterDetails from './screens/characterDetails'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/sign-in" component={Signin} />
        <Route path="/home" exact component={Home} />
        <Route path="/details/:id" component={CharacterDetails} />
      </Switch>
    </BrowserRouter>
  )
}
