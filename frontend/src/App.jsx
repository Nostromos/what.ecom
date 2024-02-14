import './App.css'
import {
  Header,
  Footer,
  ProductList
} from './components';

/**
 * Root app render for react. 
 */

function App() {
  
  return (
    <div className="main_app">
      <Header />
      <ProductList />
      <Footer />
    </div>
  )
}

export default App
