import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pokemon from './pages/Pokemon/Pokemon'
import Forbidden from './pages/Forbidden/Forbidden'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/pokemon/:name' component={Pokemon} />
      <Route path='*' component={Forbidden} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
