import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

    {/* left side */}
    <div className='n_left'>
        <img className='logo' src='./Michael_logo1.png' alt='logo'/>
    </div>

    {/* right side */}
    <div className='n_right'>
    <ul>
        <li>A propos</li>
        <li>Mes compétences</li>
        <li>Portofolio</li>
        <li>Contact</li>
    </ul>
    <button className='button n_button'>Me contacter</button>
    </div>

    </div>
  )
}

export default Navbar