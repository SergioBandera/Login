import React, { useState } from 'react'
import { Login } from './components/Login'
import {Brand} from './components/Brand'
import { Link, Route, Routes} from "react-router-dom"
import UserContext from './context/UserContext'

export const App = () => {

  const [user, setUser] = useState("X-UserID")
  return (
    <UserContext.Provider value={{user, setUser}}>
    <>
      <header>
        <h1>{user}</h1>
        <nav>
          <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/Brand'>Brand</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/brand' element={<Brand />} />
      </Routes>
        
    </>
      
   
  
   </UserContext.Provider>
  )
}
