import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore';
import { LOGIN_ROUTE } from '../../utils/consts';

function Auth() {

  const location = useLocation()
  const isLoginPath = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {isAuth, setAuth} = useAuthStore()


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAuth(true)
  }
  
  return (
    <form onSubmit={submitHandler}>
      <h1>{isAuth ? 'TRUE' : 'FALSE'}</h1>
      <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <br />
      <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
      <br />
      <input type="submit" value="submit" />
    </form>
  )
}

export default Auth