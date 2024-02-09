import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';

/**
 * Root app render for react. 
 * @param {state} props - takes state.
 * @returns {ReactNode} Returns the app.
 */

function App() {

  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  )
}

export default App
