import { useState, useEffect } from 'react';
import ProductCard from "../../elements/ProductCard/ProductCard";

/**
 * @summary Renders a list of products into a box, lol. 
 * @description Takes an object list of products and renders each product card.
 * 
 * @param {object} productsList - a JSON list of product search results based on filters
 * 
 */

export default function ProductList({ productsList }) {
  const [cardList, setCardList] = useState();




  return productsList.map((product, i) => (
    <ProductCard
      key={i}
      productId={product.productId}
      productName={product.productName}
      productThumbnail={product.productThumbnail}
      productPrice={product.productPrice}
      hasDiscount={product.hasDiscount}
      discountPrice={product.discountPrice}
      productColors={product.productColors}
    />
  ))
}