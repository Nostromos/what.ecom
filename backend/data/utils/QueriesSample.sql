/* ----------------------------------------------------------
 *  Scratchpad & Reference for SQL Queries Throughout the app
 */----------------------------------------------------------


 /*
  *  Get Product List from Cart ID
  */

-- 1. Get the current User ID and find the Cart ID that matches.
-- 2. Find all the items in products_carts that match the Cart ID.
-- 3. Return a list of products and quantities that match the cart id
-- TABLES: carts, products_carts, products
-- SAMPLE cart_id = 913

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
WHERE carts.id = 913;

/*
id	sku	name	base_price	quantity	has_discount	discount_price	id	user_id
id	sku	name	base_price	quantity	has_discount	discount_price	id	user_id
389	846535	Pineland Wild Indigo	$339.57	1	true	$16.96	913	931
64	544870	Desert Christmas Tree	$258.95	1	false	$298.10	913	931
999	644144	Golden Suncup	$687.12	4	true	$238.05	913	931
890	780268	Oligomeris	$973.94	4	false	$454.68	913	931
809	543250	Climbing Ilang-ilang	$911.19	3	true	$100.22	913	931
*/



 /*
  *  Get List of Carts by User
  */

SELECT carts.id AS "cart_id",
       users.id AS "user_id"
FROM carts
INNER JOIN users
ON carts.user_id = users.id
WHERE users.id = 20
