import {
  SaleHero,
  CategoryCarousel,
  NewsletterSignup,
  HolidayDeal,
  CurrentDeals,
} from '../../components'


function HomePage() {
  
  return (
    <main className="homepage">
      <SaleHero />
      <CategoryCarousel />
      <section className="homepage_minis">
        <NewsletterSignup />
        <HolidayDeal />
        <CurrentDeals />
      </section>
    </main>

  )
}

export default HomePage;