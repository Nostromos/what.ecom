import './HolidayDeal.css';

/**
 * Component to display the current campaign/deal on the hompage. Should link to a selection of products included in that deal.
 * 
 * @returns {ReactNode} Returns the holiday deal/campaign component.
 */

function HolidayDeal() {
  
  return (
    <section className="holiday-deals">
      <p className="holiday-deal-copy">Holiday Deal!</p>
      <button className="holiday-deal-button">BUY NOW</button>
    </section>
  )
}

export default HolidayDeal;