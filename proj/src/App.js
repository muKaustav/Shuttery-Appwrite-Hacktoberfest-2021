import Login from './routes/login'
import Application from './routes/Application/App'
import { ProtectedRoute } from './routes/ProtectedRoute'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path='/' component={Application} />
        <Route exact path='/login' component={Login} />
        <Route path='*' component={() => 'ERROR 404 NOT FOUND'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
