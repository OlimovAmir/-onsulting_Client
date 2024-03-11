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
  const controls = useAnimation();
  const { ref, inView } = useInView();

  

  useEffect(() => {
    if (inView) {
      // Анимация, которую вы хотите запустить при появлении в области видимости
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

 
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Banner />
        <ButtonBanner />
      </header>
      <main>
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 100 }} // Начальное состояние до появления в области видимости
          animate={controls}
          transition={{ duration: 1 }} // Время анимации
        >
          <Service />
        </motion.section>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }} // Начальное состояние до появления в области видимости
          animate={controls}
          transition={{ duration: 5 }} // Время анимации
        >
          <OurAdventage />
        </motion.div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
