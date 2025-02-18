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
 * @returns {ReactNode} Multiple components used for page content.
 */

function PageContent() {
  const [results, setResults] = useState();

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch("http://localhost:3000/api/products");
      const products = await response.json();
      setResults(products);
    }

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

export default PageContent;