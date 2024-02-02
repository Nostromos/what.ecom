import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import './Footer.css';

/**
 * @summary Footer component.
 * @description Component for returning the main site footer, with copyright, footer nav, and language select components.
 * @param {string} currentLanguage - the language to render copy in for the user.
 * @returns {ReactNode} Returns footer including copyright, footer nav, and [the LanguageSelect]{@link LanguageSelect} component.
 * @author Michael Monaghan
 */

// eslint-disable-next-line react/prop-types
export default function Footer ({ currentLanguage }) {
  
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
      <LanguageSelect id="language-select" currentLangugae={currentLanguage} />
    </footer>
  )
}