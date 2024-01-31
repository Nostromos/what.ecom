import { useState } from 'react';
import Logo from '../../elements/Logo/Logo';
import HeaderNav from '../../elements/HeaderNav/HeaderNav';
import UserNav from '../../elements/UserNav/UserNav';
import LogIn from '../../elements/LogIn/LogIn';
import './Header.css';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  
  return (
    <header id="headerContainer">
      <Logo />
      <HeaderNav />
      {loggedIn ? <UserNav /> : <LogIn />}
    </header>
  )
}