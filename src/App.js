import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/UI/navbar/Header';
import { AuthContext } from './context';

import './styles/App.css';

export default function App () {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth') === Boolean(true).toString()) setIsAuth(true)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    localStorage.setItem('auth', isAuth.toString())
  }, [isAuth])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Header />
        <div className="body container">
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
            
  )
}