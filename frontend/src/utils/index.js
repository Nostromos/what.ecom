/**
 * @summary Returns an object containing information about categories.
 * @description Returns an object containing
 * @returns 
 */

async function getCategories() {
  const response = await fetch('http://localhost:3000/api/category');
  const results = await response.json();
  
  return results;
}

export { getCategories };