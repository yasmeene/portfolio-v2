import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import React from 'react';

const Header = () => {
  const { homepage } = header

  var showStar = <div className="star-move" />

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {showStar}
          </a>
        ) : (
          showStar
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
