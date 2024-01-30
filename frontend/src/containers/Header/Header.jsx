import Logo from '../../components/Logo/Logo';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import UserNav from '../../components/UserNav/UserNav';

export default function Header() {
  
  return (
    <div id="headerContainer">
      <Logo />
      <HeaderNav />
      <UserNav />
    </div>
  )
}