import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import './Footer.css';

export default function Footer() {
  
  return (
    <footer id="footer">
      <p id="copyright">© 2077 what.ecom, a subsidiary of Monaghan-Wong Heavy Industries, Inc.</p>
      <nav id="footer-nav">
        <ol id="footer-nav-list">
          <li className="footer-nav-item">Privacy</li>
          <li className="footer-nav-item">Terms of Service</li>
          <li className="footer-nav-item">Contact</li>
          <li className="footer-nav-item">Support</li>
        </ol>
      </nav>
      <LanguageSelect id="language-select"/>
    </footer>
  )
}