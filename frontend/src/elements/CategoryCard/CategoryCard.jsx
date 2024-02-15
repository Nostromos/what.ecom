import './CategoryCard.css';

/**
 * @summary Returns a card per category, used in the home page carousel.
 * @description Each CategoryCard is an `article` element with a descriptive background image and an overlay containing the name. 
 * 
 * @param {object} category - An object containing category display information. 
 * @param {string} category.thumbnail - URL to category thumbnail.
 * @param {string} category.name - The category name.
 * 
 * @returns {ReactNode} Returns an `article` component containing a category box and image.
 */

function CategoryCard ({ category }) {
  const { name } = category;
  const thumbnail = 'https://loremflickr.com/240/240';
  
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

export default CategoryCard;