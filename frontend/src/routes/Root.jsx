// Package Imports
import { Outlet } from 'react-router-dom';

// Component Imports
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


/**
 * Root layout component.
 * 
 * @returns {ReactNode}
 */

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;