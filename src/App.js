import './App.css';
import Banner from './components/banner/Banner';
import ButtonBanner from './components/button/ButtonBanner';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/service/Service';
import OurAdventage from './components/our_adventage/OurAdventage';
import Footer from './components/footer/Footer';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const controlsService = useAnimation();
  const { ref: refService, inView: inViewService } = useInView();
  
  const controlsAdvantage = useAnimation();
  const { ref: refAdvantage, inView: inViewAdvantage } = useInView();

  useEffect(() => {
    if (inViewService) {
      controlsService.start({ opacity: 1, y: 0 });
    }
    if (inViewAdvantage) {
      controlsAdvantage.start({ opacity: 1, y: 0 });
    }
  }, [controlsService, controlsAdvantage, inViewService, inViewAdvantage]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Banner />
        <ButtonBanner />
      </header>
      <main>
        <motion.section
          ref={refService}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsService}
          transition={{ duration: 1 }}
        >
          <Service />
        </motion.section>
        <motion.section
          ref={refAdvantage}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsAdvantage}
          transition={{ duration: 1 }}
        >
          <OurAdventage />
        </motion.section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
