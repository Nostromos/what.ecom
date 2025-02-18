import './App.css'
import {
  Header,
  Footer,
} from './components';
import HomePage from "./pages/HomePage/HomePage.jsx";

/**
 * Root app render for react. 
 */

function App() {

  return (
    <div className="main_app">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App;