import Header from './component/Header';
import Landing from './component/Landing';
import HowItWork from './component/HowItWork';
import AboutUs from './component/AboutUs';
import PopularPackage from './component/PopularPackage';
import Promo from './component/Promo';
import NewsLetter from './component/NewsLetter';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Landing/>
    <HowItWork/>
    <AboutUs/>
    <PopularPackage/>
    <Promo/>
    <NewsLetter/>
    <Footer/>
    </div>
  );
}

export default App;
