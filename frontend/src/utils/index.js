/**
 * @typedef {Object} CategoryList
 * @property {Number} id - the unique id of the category
 * @property {String} name - the name of the category that customers see
 * @property {String} description - The longform description of the category. May or may not be seen by customers. 
 */

/**
 * @summary Returns an object containing information about categories.
 * @description Returns an object containing
 * @returns {CategoryList} a list of categories
 */

async function getCategories() {
  const response = await fetch('http://localhost:3000/api/category');
  const results = await response.json();
  
  return results;
}

export { getCategories };