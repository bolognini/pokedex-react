import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Forbidden from './pages/Forbidden'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/pokemon/:name'
        render={(props) => <Pokemon {...props} />}
      />
      <Route path='*' component={Forbidden} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)