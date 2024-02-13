import './ProductCard.css';

/**
 * Component to display one product in a card with associated thumb, color, and pricing information. 
 * 
 * @param {object} product
 * @param {string} product.name - The name of a product.
 * @param {boolean} product.has_discount - Whether a product is discounted or not.
 * @param {string} product.base_price - The price before taxes or discount.
 * @param {string} product.discount_price - The price after discount, before taxes.
 * 
 * @returns {ReactNode} Returns a card for a single product including color & pricing information.
 */

function ProductCard({ product }) {
  const {
    name,
    has_discount,
    base_price,
    discount_price,
  } = product;

  return (
    <article className="product-card" >
      <a href="">
      <img src="" className="product-card-thumbnail" />
      </a>
      <p className="product-card-name">{name}</p>
      <p className="product-card-colors">Product Colors: Green, Blue, Red</p>
      {has_discount ? (
        <p className="product-card-price">
          <s>{base_price}</s><br></br>
          {discount_price}
        </p>
      ) : (
          <p className="product-card-price">
            ${discount_price}
          </p>
      )}
    </article>
  )
}

export default ProductCard;