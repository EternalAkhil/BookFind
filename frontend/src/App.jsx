import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error from './pages/Error'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/register" element = {<Signup />}/>
        <Route path = "/profile" element = {<Profile />}/>
        <Route path = "/favourites" element = {<Favorites />}/>
        
        <Route path = "*" element = {<Error />} />
      </Routes>
    </div>
  )
}

export default App
