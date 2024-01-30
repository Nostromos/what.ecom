import { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import UserNav from ''

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      <Logo />
      <HeaderNav />
      <UserNav />
    </>
  )
}