import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pokemon from './pages/Pokemon/Pokemon'
import Forbidden from './pages/Forbidden/Forbidden'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/pokemon/:name' component={Pokemon} />
      <Route path='*' component={Forbidden} />
    </Switch>
  </BrowserRouter>
)

export default Routes
