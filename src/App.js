import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/services.scss'
import './styles/card.scss'
import Card from './components/Card';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
