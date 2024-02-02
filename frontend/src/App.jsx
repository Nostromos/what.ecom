import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/**
 * Root app render for react. 
 * @param {state} props - takes state.
 * @returns {ReactNode} Returns the app.
 */

function App() {

  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

export default App
