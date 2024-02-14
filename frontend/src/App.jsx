import './App.css'
import {
  Header,
  Footer,
  HomePage
} from './components';

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