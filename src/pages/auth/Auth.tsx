import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore';
import { LOGIN_ROUTE, REG_ROUTE } from '../../utils/consts';

function Auth() {

  const location = useLocation()
  const isLoginPath = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const {isAuth, login, isLoading} = useAuthStore()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login(email, password)
  }

  if(isLoading) {
    return <h3>загрузка...</h3>
  }
  
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <form onSubmit={submitHandler}>
        <input className='p-3 rounded-md mb-2 border-[1px]'
          type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
        <br />
        <input className='p-3 rounded-md mb-2 border-[1px]'
          type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <br />
        <input className='p-3 rounded-md mb-2 cursor-pointer border-[1px] border-black' type="submit" value="submit" />
      </form>
      <p>
        {isLoginPath 
          ? 
            <NavLink to={REG_ROUTE}>
              {"Don't have an account? Sign Up"}
            </NavLink>
          :
            <NavLink to={LOGIN_ROUTE}>
              {"Don't have an account? Sign Up"}
            </NavLink>
          }
      </p>
    </div>
  )
}

export default Auth