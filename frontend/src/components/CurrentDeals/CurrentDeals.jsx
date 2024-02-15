import { useEffect, useState } from 'react';
import './CurrentDeals.css';
import { ProductCard } from '../../elements';

/**
 * Links to current items on sale/deal.
 * 
 * @returns {ReactNode} Returns a component that displays whatever the current deal splash is and a button that links to a filtered list of products for those sale items.
 */

function CurrentDeals() {
  const [dealCards, setDealCards] = useState([]);


  useEffect(() => {
    async function getCurrentDeals() {
      const response = await fetch('http://localhost:3000/api/products/deals');
      const results = await response.json();
      setDealCards(results);
      console.log(dealCards);
    }
    getCurrentDeals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <section className="current-deals">
      {dealCards.map((product, i) => (
          <ProductCard key={i} product={product} />
        )
      )}
    </section>
  )
}

export default CurrentDeals;