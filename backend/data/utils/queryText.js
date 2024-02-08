export const getCartById = () => {
  return `
    SELECT products.id,
          products.sku,
          products.name,
          products.base_price,
          products_carts.quantity,
          products.has_discount,
          products.discount_price,
          carts.id AS "cart_id",
          carts.user_id AS "user_id"
    FROM carts
    INNER JOIN products_carts
    ON carts.id = products_carts.cart_id
    INNER JOIN products
    ON products.id = products_carts.product_id
    WHERE carts.id = $1`
};

export const getUsersCarts = () => {
  return `
    SELECT carts.id AS "cart_id",
           users.id AS "user_id"
    FROM carts
    INNER JOIN users
    ON carts.user_id = users.id
    WHERE users.id = $1`
};

export const createCart = () => {
  return `
    INSERT INTO carts (user_id)
    VALUES ($1)`
}