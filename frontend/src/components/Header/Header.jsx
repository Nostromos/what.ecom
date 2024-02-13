import { useState } from 'react';
import Logo from '../../elements/Logo/Logo';
import HeaderNav from '../../elements/HeaderNav/HeaderNav';
import UserNav from '../../elements/UserNav/UserNav';
import LogIn from '../../elements/LogIn/LogIn';
import './Header.css';

/**
 * @summary Returns the header.
 * @description Returns a `header` element that includes Logo, HeaderNav, UserNav, and LogIn components depending on whether the user is logged in or not.
 * 
 * @returns {ReactNode} Header & Nav for all pages.
 */

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useState(true);
  
  return (
    <header id="header">
      <Logo id="logo"/>
      <HeaderNav id="header-nav"/>
      {loggedIn ?
        <UserNav id="user-nav" /> :
        <LogIn id="login" />}
    </header>
  )
}

export default Header;