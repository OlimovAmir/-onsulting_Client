import './App.css';
import Banner from './components/banner/Banner';
import ButtonBanner from './components/button/ButtonBanner';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/service/Service';
import OurAdventage from './components/our_adventage/OurAdventage';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Banner />
        <ButtonBanner />
      </header>
      <main>
        <section>
          <Service />
        </section>
        <OurAdventage/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
