/* import SaleHero from '../SaleHero/SaleHero';
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';
import HolidayDeal from '../HolidayDeal/HolidayDeal';
import CurrentDeals from '../CurrentDeals/CurrentDeals'; */
import { useState, useEffect } from 'react';
import './PageContent.css'; 

/**
 * Container to render page content.
 * 
 * @returns Multiple components used for page content.
 */

export default function PageContent() {
  const [results, setResults] = useState();

  async function fetchResults() {
    const response = await fetch("http://localhost:3000/api/products");
    const products = await response.json();
    console.log(products);  
    setResults(products);
  }

  useEffect(() => {
    fetchResults();
  }, []);
  
  
  return (
    <section>
      {/* <SaleHero />
      <CategoryCarousel />
      <NewsletterSignup />
      <HolidayDeal />
      <CurrentDeals /> */}
      {(typeof results === 'undefined') ? (
        <p>Loading...</p>
      ) : (
          results.map((product) => (
            <article key={product.id}>
              <h3>{product.name}</h3>
                <p>{product.short_description}</p>
            </article>
          ))
      ) }
    </section>
  );
}