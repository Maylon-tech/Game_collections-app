import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
        <div className='logo'>Logo</div>

        <div className='menu'>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Games</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header