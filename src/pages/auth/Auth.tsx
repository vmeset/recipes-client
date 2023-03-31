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
      <h2 className='font-bold text-2xl mb-2'>
        {isLoginPath ? 'Авторизация' : 'Регистрация'}
      </h2>
      <form onSubmit={submitHandler} className='flex flex-col'>
        <input className='p-3 rounded-md mb-2 border-[1px] w-96'
          placeholder='Email'
          type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
        <input className='p-3 rounded-md mb-2 border-[1px] w-96'
          placeholder='Пароль'
          type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
        {!isLoginPath &&
          <input className='p-3 rounded-md mb-2 border-[1px] w-96'
            placeholder='Подтвердите пароль'
            type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
        }
        <input className='p-3 rounded-md mb-2 cursor-pointer border-[1px] border-black w-96 hover:bg-cyan-400'
          type="submit" value={isLoginPath ? 'Войти' : 'Зарегистрироваться'} />
      </form>
      <p>
        {isLoginPath 
          ? 
            <>
              Нет аккаунта?
              <NavLink to={REG_ROUTE}>
                <span className='underline ml-1 text-cyan-400'>Зарегистрируйся!</span>
                {/* {" Зарегистрируйся!"} */}
              </NavLink>
            </>
          :
            <>
              Есть аккаунт?
              <NavLink to={LOGIN_ROUTE}>
                <span className='underline ml-1 text-cyan-400'>Авторизируйся!</span>
                {/* {" Авторизируйся!"} */}
              </NavLink>
            </>
          }
      </p>
    </div>
  )
}

export default Auth