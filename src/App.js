import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import "./App.scss"
import Header from './components/Header/Header'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tvshows' element={<Home/>}/>
          <Route path='/movies' element={<Home/>}/>
          <Route path='/added' element={<Home/>}/>
          <Route path='/list' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
