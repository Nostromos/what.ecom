import currentLanguageFlag from '../../assets/currentLanguageFlag.png';
import './LanguageSelect.css';

/**
 * @summary Component to select a language.
 * @description This component takes a currentLanguage param from props and uses it to display the flag for the current language.
 * @param {object} props
 * @param {string} [props.currentLanguage="english"] - the current language selected by the user, defaults to english.
 * @returns {Component} HTML code that renders the current language selection for the user.
 */

// eslint-disable-next-line react/prop-types
export default function LanguageSelect({ currentLanguage="english" }) {
  
  return (
    <div id="current-language">
      <p id="current-language-text">{currentLanguage}</p>
      <img id="current-language-flag" src={currentLanguageFlag}></img>
    </div>
  )
}