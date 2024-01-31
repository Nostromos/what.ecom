import './Logo.css';
import logoImage from '../../assets/CompanyLogo.png';

export default function Logo() {
  
  return (
    <div id="logo-box">
      <img src={logoImage} id="logoImage"></img>
      <h1 className="bungee-shade-regular" id="logoText">what.ecom</h1>
    </div>
  )
}