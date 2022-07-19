import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import SearchBar from './searchBar';

import Logo from '../LogInSignUp/images/image-removebg-preview.png'

const Header = ({ user, setUser }) => {
  let [login, setLogin] = useState({ href: '/loginpage', li: 'Login/Signin' })
  // let [user, setUser] = useState()
  // function userlogin(){

  // }
  // console.log(user[0])
  return (
    <>
      <nav className='navBar'>

        <Link to='/' className='
          logo'> <img src={Logo} /> KETCHUP</Link>
        <SearchBar />

        <div className='avaterusernameContainer'>
          <Link to='/userprofile'>
            <img alt="" className='headerAvatar' src={user[0].avatar}></img>
            <h1 className='headerUsername'>{user[0].username}</h1>
          </Link>
          <Link to='/'>
            <button className="logout" onClick={() => { setUser(false); localStorage.clear() }}>Logout</button>
          </Link>
        </div>
        {/* <li className='active'><Link to='/loginpage'>{login.li}</Link></li> */}


      </nav>

    </>
  )
}

export default Header;