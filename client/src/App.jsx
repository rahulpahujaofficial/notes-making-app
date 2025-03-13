import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { Button } from './components/ui/button'
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App