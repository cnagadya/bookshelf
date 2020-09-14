import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dialog from '@reach/dialog';
import { Logo } from "./components/logo";

const LoginForm = ({ onSubmit, buttonText }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = event.target.elements
    //something new
    onSubmit({
      username: username.value,
      password: password.value
    })
  }
  return <form onSubmit={handleSubmit}>
    <label>Username</label>
    <input name='username'></input>

    <label>Password</label>
    <input id="password" type="password" />
    <button type='submit'>{buttonText}</button>
  </form>
}


const App = () => {

  const [modalState, setModalState] = useState('none')
  const showLogin = () => setModalState('login')
  const showRegister = () => setModalState('register')
  const close = () => setModalState('none')

  const login = loginData => {
    console.log('login', loginData)
  }

  const register = registrationData => {
    console.log('register', registrationData)
  }

  return <>
    <Logo />
    <h1>Bookshelf</h1>
    <button onClick={showLogin}>Login</button>
    <button onClick={showRegister}>Register</button>

    <Dialog isOpen={modalState === 'login'} onDismiss={close} aria-label='login'>
      <button className="close-button" onClick={close}>
        <span aria-hidden>×</span>
      </button>
      <h3>Login</h3>
      <LoginForm onSubmit={login} buttonText="Login" />
    </Dialog>

    <Dialog isOpen={modalState === 'register'} onDismiss={close} aria-label='register'>
      <button className="close-button" onClick={close}>
        <span aria-hidden>×</span>
      </button>
      <h3>Register</h3>
      <LoginForm onSubmit={register} buttonText="Register" />
    </Dialog>
  </>
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
