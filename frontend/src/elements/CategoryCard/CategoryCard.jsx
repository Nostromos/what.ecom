/**
 * @fileoverview Returns a card for each category selection on home page.
 * 
 * @author Michael Monaghan
 */


/**
 * @summary Returns a card per category, used in the home page carousel.
 * @description Each CategoryCard is an `article` element with a descriptive background image and an overlay containing the name. 
 * 
 * @param {object} category - An object containing category display information. 
 * @param {string} category.thumbnail - URL to category thumbnail.
 * @param {string} category.name - The category name.
 * 
 * @returns {JSX.Element} Returns an `article` component containing a category box and image.
 */

export default function CategoryCard (category) {
  const { thumbnail, name } = category;
  
  return (
    <article>
      <img
        className="category-card-img-background"
        src={thumbnail} />
      <p
        className="category-card-text-overlay">
        {name}</p>
    </article>
  )
}