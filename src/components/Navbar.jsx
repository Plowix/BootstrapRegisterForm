import { useState } from 'react'

function Navbar({updateState}) {
  return (
    <nav className='navbar navbar-light bg-light'>
      <button className='nav-link' onClick={()=>updateState('login')}>Logowanie</button>
      <button className='nav-link' onClick={()=>updateState('register')}>Rejestracja</button>
    </nav>
  )
}

export default Navbar;
