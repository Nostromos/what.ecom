import ProductCard from "../../elements/ProductCard/ProductCard"

/**
 * @summary Renders a list of products into a box, lol. 
 * @description Takes an object list of products and renders each product card.
 * 
 * @param {object} productsList - a JSON list of product search results based on filters
 * 
 */

export default function ProductList({ productsList }) {

  return productsList.map((product) => (
    <ProductCard
      key={product.productId}
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