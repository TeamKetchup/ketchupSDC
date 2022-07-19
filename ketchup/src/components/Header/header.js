import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import SearchBar from './searchBar';

import Logo from '../LogInSignUp/image-removebg-preview.png'

const Header = ({ user }) => {
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
          <Link to={`/userprofile/${user[0].id}`} >
            <img className='headerAvatar' src={user[0].avatar}></img>
            <h1>@{user[0].username}</h1>
          </Link>
        </div>
        {/* <li className='active'><Link to='/loginpage'>{login.li}</Link></li> */}


      </nav>

    </>
  )
}

export default Header;