

import { useState } from 'react';
import Logo from '../../elements/Logo/Logo';
import HeaderNav from '../../elements/HeaderNav/HeaderNav';
import UserNav from '../../elements/UserNav/UserNav';
import LogIn from '../../elements/LogIn/LogIn';
import './Header.css';

export default function Header() {
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