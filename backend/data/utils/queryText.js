export const getCartById = `
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
    WHERE carts.id = $1`;

export const getUsersCarts = `
    SELECT carts.id AS "cart_id",
           users.id AS "user_id"
    FROM carts
    INNER JOIN users
    ON carts.user_id = users.id
    WHERE users.id = $1`;

export const createCart = `
    INSERT INTO carts (user_id)
    VALUES ($1)`;

export const addToCart = `
    INSERT INTO products_carts (cart_id, product_id, quantity)
    VALUES ($1, $2, $3)`;

export const updateQuantity = `
    UPDATE products_carts
    SET quantity = $1
    WHERE cart_id = $2
    AND product_id = $3`;

// TODO #55 Clearing the cart just deletes the cart row from carts. In future, this should also clear related rows in products_carts. Related to #54
export const clearCart =
   `DELETE FROM carts
    WHERE cart_id = $1`;

export const removeAllCartItems =
  `DELETE FROM products_carts
   WHERE cart_id = $1`;

export const removeSingleProduct =
  `DELETE FROM products_carts
   WHERE cart_id = $1
   AND product_id = $2`;