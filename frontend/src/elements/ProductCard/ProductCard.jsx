import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
/**
 * Component to display one product in a card with associated thumb, color, and pricing information. 
 * 
 * @param {integer} productId - the id of the product for sorting
 * @param {string} productName - the name of the product
 * @param {string} productThumbnail - Path to the thumbnail image of a product
 * @param {number} productPrice - The price of a product not including discounts
 * @param {boolean} hasDiscount - True/false on whether the product has a discount or not
 * @param {number} [discountPrice] - price of the product AFTER discount
 * @param {array} productColors - array of strings or identifiers for colors
 * 
 * @returns {ReactNode} Returns a card for a single product including color & pricing information.
 */

export default function ProductCard(product) {
  
  return (
    <article class="product-card" key={product.id} sku={product.sku}>
      <a href={/* LINK TO PRODUCT DETAILS PAGE */}>
      <img src={product.thumbnail} class="product-card-thumbnail" />
      </a>
      <p class="product-card-name">{product.name}</p>
      <p class="product-card-colors">Product Colors: {product.colors}</p>
      {product.hasDiscount ? (
        <p class="product-card-price">
          <s>${product.price}</s><br></br>
          ${product.discountPrice}
        </p>
      ) : (
          <p class="product-card-price">
            ${product.discountPrice}
          </p>
      )}
    </article>
  )
}