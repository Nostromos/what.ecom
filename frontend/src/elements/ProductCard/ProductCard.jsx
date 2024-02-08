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

export default function ProductCard({ productId, productName, productThumbnail, productPrice, hasDiscount, discountPrice, productColors }) {
  
  return (
    <article id={productId}>
      <img src={productThumbnail} />
      <p>{productName}</p>
      <p>Product Colors: {productColors}</p>
      {hasDiscount ? (
        <p>
          <s>${productPrice}</s><br></br>
          ${discountPrice}
        </p>
      ) : (
          <p>
            ${discountPrice}
          </p>
      )}
    </article>
  )
}