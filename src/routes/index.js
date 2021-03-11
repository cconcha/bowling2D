import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, GamePage } from '../pages'

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route render={(props) => <LoginPage {...props} />} path={`/login`} />
          <Route render={(props) => <GamePage {...props} />} path={`/game`} />
          <Route render={(props) => <HomePage {...props} />} path={`/`} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
