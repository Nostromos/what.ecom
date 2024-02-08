import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageContent from './components/PageContent/PageContent';

/**
 * Root app render for react. 
 * @param {state} props - takes state.
 * @returns {ReactNode} Returns the app.
 */

function App() {

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  )
}

export default App
