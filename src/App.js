import './App.css';
import "./fonts/galanogrotesque-regular.otf"
import "./fonts/galanogrotesque-medium.otf"
import "./fonts/galanogrotesque-semibold.otf"

import Header from './components/Header';
import SloganComponent from './components/SloganComponent';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='slogan-container'>
        <SloganComponent/>
      </div>
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
