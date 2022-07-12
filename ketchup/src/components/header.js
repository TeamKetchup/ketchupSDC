import { useState } from 'react';
import './header.css'
import LandingPage from './landingPage';

function Header() {
    let [login,setLogin] = useState({href: '/', li: 'Login/Signin'})
    let [user, setUser] = useState()
    function userlogin(){

    }
  return (
      <>
      <nav className='navBar'>
        
          <a href='/' className='
          logo'> <img src='https://img.freepik.com/free-vector/tomatoes-cartoon-riding-future-spaceship-cute-design_152558-51298.jpg?w=2000'/> KETCHUP</a>
          <input type='text'></input>
          <button>search</button>
          <ul>
              <li className='active'><a href={login.href}>{login.li}</a></li>
          </ul>
      </nav>
      <LandingPage/>
      </>
  )
}

export default Header;