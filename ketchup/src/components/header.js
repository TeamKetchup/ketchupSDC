import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import Logo from './LogInSignUp/image-removebg-preview.png'

function Header() {
    let [login,setLogin] = useState({href: '/Loginpage', li: 'Login/Signin'})
    let [user, setUser] = useState()
    function userlogin(){

    }
  return (
      <>
      <nav className='navBar'>
        
          <Link to='/' className='
          logo'> <img src={Logo}/> KETCHUP</Link>
          <input type='text'></input>
          <button>search</button>
          <ul>
              <li className='active'><Link to={login.href}>{login.li}</Link></li>
          </ul>
      </nav>
      
      </>
  )
}

export default Header;