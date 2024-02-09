import { useState, useEffect } from 'react';
import ProductCard from "../../elements/ProductCard/ProductCard";

/**
 * @summary Renders a list of products into a box, lol. 
 * @description Takes an object list of products and renders each product card.
 * 
 * @param {object} productsList - a JSON list of product search results based on filters
 * 
 */

export default function ProductList () {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchProductsList = async () => {
      const response = await fetch('http://localhost:3000/api/products');
      const results = await response.json();
      setCardList(results);
    }

    fetchProductsList();
  }, []);

  return cardList.map((product, i) => (
    <ProductCard
      key={i}
      product={product}
    />
  ))
}