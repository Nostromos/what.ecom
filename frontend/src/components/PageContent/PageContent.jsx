import SaleHero from '../SaleHero/SaleHero';
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';
import HolidayDeal from '../HolidayDeal/HolidayDeal';
import CurrentDeals from '../CurrentDeals/CurrentDeals';
import './PageContent.css'; 

/**
 * Container to render page content.
 * 
 * @returns Multiple components used for page content.
 */

export default function PageContent() {
  
  return (
    <section id="page-content">
      <SaleHero />
      <CategoryCarousel />
      <NewsletterSignup />
      <HolidayDeal />
      <CurrentDeals />
    </section>
  );
}