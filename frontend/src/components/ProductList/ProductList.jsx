/**
 * @fileOverview Defines the ProductList component, which lists ProductCards.
 * 
 * @author Michael Monaghan
 * 
 * @module react.useState
 * @module react.useEffect
 * @module ../../elements/ProductCard/ProductCard
 */

import { useState, useEffect } from 'react';
import ProductCard from "../../elements/ProductCard/ProductCard";

/**
 * @summary Renders a list of products into a box.
 * @description Fetches a Array of product objects from the API, saves them to state, and .maps over them, passing props to and rendering a ProductCard for each entry.
 * @returns {JSX.Element} A `section` element containing a list of ProductCard components.
 */

export default function ProductList () {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchProductsList = async () => {
      /**
       * @summary Fetches all the products for display in ProductList.
       * @description Dispatches a GET request to /products endpoint that returns an array of objects 
       */
      const response = await fetch('http://localhost:3000/api/products');
      const results = await response.json();
      setCardList(results);
    }
    console.log('Fetching products...');
    fetchProductsList();
  }, []);

  return (
    <section>
      {cardList.map((product, i) => (

        <ProductCard
          key={i}
          product={product}
        />

      ))}
    </section>
  )
}