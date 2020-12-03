import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Importar as páginas
import Home from './screens/Home'
import Signin from './screens/signin'

//Criar o componentes com as rotas
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/sign-in" component={Signin} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
