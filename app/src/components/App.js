import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.sass'
import Login from './Login'
import RegisterUser from './RegisterUser'
import Landing from './Landing' 
import Container from './Container'

function App({ history }) {

  const handleGoToRegister = () => history.push('/register')

  return (
    <div className="app">

      <Container>
        <Route exact path='/' render={() => <Landing onGoToRegister = {handleGoToRegister}/>} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/register' render={() => <RegisterUser />} />
      </Container>
    </div>
  );
}

export default withRouter(App);