import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import '../../Styles/Navbar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';



function Navbar() {
const user = useSelector(selectUser);


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar' >
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Plan Daily
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' data-testid="Card-Render-Test" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/create_account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Create Account!
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {user ? 'Click to Logout':'Sign In'}
              </Link>

            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline' 
          >{ user ? ("Welcome: SPRAWDZ CO NIE TAK "/*+ user.email */) : "Login Page"} </Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;