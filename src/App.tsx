import React, { useEffect } from 'react';
import AppRouter from './components/router/AppRouter';
import { useAuthStore } from './store/authStore';

function App() {

  const checkAuth = useAuthStore(state => state.checkAuth)

  useEffect(() => {
    if(localStorage.getItem('accessToken')) {
      checkAuth()
    }
  }, [])
  

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
