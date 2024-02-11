/**
 * @fileoverview Footer component.
 * 
 * @author Michael Monaghan
 * 
 * @module react.useState
 */

import { useState, useEffect } from 'react';
import CategoryCard from '../../elements/CategoryCard/CategoryCard';

/**
 * @summary Returns a carousel of category cards.
 * @description 
 * 
 * @returns {JSX.Element} Returns a list of 
 */

export default function CategoryCarousel() {
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