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
  const { ref: refService, inView: inViewService } = useInView({
    triggerOnce: false // позволяет использовать хук useInView несколько раз
  });
  
  const controlsAdvantage = useAnimation();
  const { ref: refAdvantage, inView: inViewAdvantage } = useInView({
    triggerOnce: false // позволяет использовать хук useInView несколько раз
  });

  const controlsFooter = useAnimation();
  const { ref: refFooter, inView: inViewFooter } = useInView({
    triggerOnce: false // позволяет использовать хук useInView несколько раз
  });

  useEffect(() => {
    if (inViewService) {
      controlsService.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controlsService.start({ opacity: 0, y: 100 });
    }
  }, [controlsService, inViewService]);

  useEffect(() => {
    if (inViewAdvantage) {
      controlsAdvantage.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controlsAdvantage.start({ opacity: 0, y: 100 });
    }
  }, [controlsAdvantage, inViewAdvantage]);

  useEffect(() => {
    if (inViewFooter) {
      controlsFooter.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controlsFooter.start({ opacity: 0, y: 100 });
    }
  }, [controlsFooter, inViewFooter]);

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
        >
          <Service />
        </motion.section>
        <motion.section
          ref={refAdvantage}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsAdvantage}
        >
          <OurAdventage />
        </motion.section>
      </main>
      <footer>
        <motion.footer
          ref={refFooter}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsFooter}
        >
          <Footer />
        </motion.footer>
      </footer>
    </div>
  );
}

export default App;
