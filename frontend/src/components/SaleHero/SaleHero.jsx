import HomepageCopy from '../../utils/HomepageFeatures';
import './SaleHero.css';

/**
 * Hero that shows up at top of page for most valuable content.
 * 
 * @returns {ReactNode} JSX to render the component, button, and some copy.
 */

function SaleHero() {
  const { main } = HomepageCopy;
  
  return (
    <section className="sale_hero_main">
      <h1 className="sale_hero_copy">{main.description}</h1>
      <button className="sale_hero_button">{main.buttonText}</button>
    </section>
  )
}

export default SaleHero;