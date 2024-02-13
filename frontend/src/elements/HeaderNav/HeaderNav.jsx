import './HeaderNav.css';

/**
 * The centered nav component for header.
 * @returns {ReactNode} Nav containing headernav items.
 */

function HeaderNav() {
  
  return (
    <>
      <nav id="headerNav">
        <ul id="navList">
          <li className="headerNavItem">New</li>
          <li className="headerNavItem">Bestsellers</li>
          <li className="headerNavItem">On Sale</li>
          <li className="headerNavItem">Shop All</li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderNav;