import currentLanguageFlag from '../../assets/currentLanguageFlag.png';
import './LanguageSelect.css';

/**
 * LanguageSelect componenet with flag.
 * 
 * @param {string} currentLanguage - the user's current language 
 * 
 * @returns {ReactNode} Returns a language select component.
 */

function LanguageSelect({ currentLanguage }) {
  
  return (
    <div id="current-language">
      <p id="current-language-text">{currentLanguage}</p>
      <img id="current-language-flag" src={currentLanguageFlag}></img>
    </div>
  )
}

export default LanguageSelect;