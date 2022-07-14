import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import Logo from './LogInSignUp/image-removebg-preview.png'

function Header() {
    let [login,setLogin] = useState({href: '/Loginpage', li: 'Login/Signin'})
    let [user, setUser] = useState()
    useEffect(() => {
        userlogin()
    
    }, []);
    let userlogin = async () => {
        try {
            const response = await fetch(`http://localhost:3025/api/profileinfo/1`);
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            let actualData = await response.json();
            setUser(actualData);
            
        } catch (error) {
            console.log(error);
        }
    }
   console.log(user)

    
  return (
      <>
      <nav className='navBar'>
        
          <Link to='/' className='
          logo'> <img src={Logo}/> KETCHUP</Link>
          <input type='text'></input>
          <button>search</button>
          <ul>
              {user && <li>{user[0].username}</li>}
              {user &&<li><img src={user[0].avatar} alt='avatar'/></li>}
          </ul>
      </nav>
      
      </>
  )
}

export default Header;