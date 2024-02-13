import './UserNav.css';

/**
 * Returns icons for users upon auth. Things like cart, profile, order history, etc.
 * @returns {ReactNode} Collection of nav icons for user interactions.
 */

function UserNav() {
  
  return (
    <ol id="userNav">
      <li className="userNavItem">SearchIcon</li>
      <li className="userNavItem">CartIcon</li>
      <li className="userNavItem">Favorites</li>
      <li className="userNavItem">ProfileIcon</li>
    </ol>
  )
}

export default UserNav;