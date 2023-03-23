import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore';
import { LOGIN_ROUTE } from '../../utils/consts';

function Auth() {

  const location = useLocation()
  const isLoginPath = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const {isAuth, login, isLoading} = useAuthStore()


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login(email, password)
    // console.log(process.env.REACT_APP_API_URL)
  }

  if(isLoading) {
    return <h3>загрузка...</h3>
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