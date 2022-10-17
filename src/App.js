import './App.css';
import Header from './components/header/Header'
import Main from './components/Main'
import Card from './components/Card'
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark">
      <Header/>
      <Main/>
      <Card/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
