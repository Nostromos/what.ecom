import { useState, useEffect } from 'react';
import CategoryCard from '../../elements/CategoryCard/CategoryCard';

/**
 * @summary Returns a carousel of category cards.
 * @description A side-scrollable list of category cards. 
 * 
 * @returns {ReactNode} Returns a list of category cards.
 */

function CategoryCarousel() {
  const [categories, setCategories] = useState();
  
  useEffect(() => {
    async function getCategories () {
      const response = await fetch('http://localhost:3000/api/categories');
      const results = await response.json();
      setCategories(results);
    }
    getCategories();
  });

  return (
    <section>
      {
        categories.map((category, i) =>
          <CategoryCard
            key={i}
            category={category}
          />
        )
      }
    </section>
  )
}

export default CategoryCarousel;