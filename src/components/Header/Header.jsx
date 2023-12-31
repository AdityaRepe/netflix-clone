import React from 'react'
import { ImSearch } from 'react-icons/im'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'

const Header = () => {
  return (
    <>
      <nav className='header'>
        <img src={logo} alt="logo"/>
        <div>
          <Link to="/tvshows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/added">Recently Added</Link>
          <Link to="/list">My List</Link>
        </div>
        <ImSearch/>
      </nav>
    </>
  )
}

export default Header
