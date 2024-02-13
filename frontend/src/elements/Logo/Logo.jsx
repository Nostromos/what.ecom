import './Logo.css';
import logoImage from '../../assets/CompanyLogo.png';

/**
 * Component to return the logo & company name in header.
 * @returns {ReactNode} Returns logo & company name.
 */

function Logo() {
  
  return (
    <div id="logo-box">
      <img src={logoImage} id="logoImage"></img>
      <h1 className="bungee-shade-regular" id="logoText">what.ecom</h1>
    </div>
  )
}

export default Logo;