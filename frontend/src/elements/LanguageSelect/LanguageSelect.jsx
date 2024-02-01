import currentLanguageFlag from '../../assets/currentLanguageFlag.png';
import './LanguageSelect.css';

export default function LanguageSelect() {
  
  return (
    <div id="current-language">
      <p id="current-language-text">English</p>
      <img id="current-language-flag" src={currentLanguageFlag}></img>
    </div>
  )
}