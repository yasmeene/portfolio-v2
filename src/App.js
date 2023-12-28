import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import './components/Loader/Loader.scss'
import Loader from './components/Loader/Loader'
import FadeInSection from './Fade.tsx'
import React from 'react';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous action (e.g., fetching data)
    const fetchData = async () => {
      // Introduce a delay of at least 5 seconds (5000 milliseconds)
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Your data fetching logic goes here

      // Once data is fetched or your initial setup is complete, hide the loader
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div id='top' className={`${themeName} app`}>

      {loading && <Loader />}

      {!loading && (
        <>
          <Header />

          <main>
            <div className='space__between'>
              <FadeInSection> <About /> </FadeInSection>
            </div>

            <div className='space__between'>
              <FadeInSection> <Projects /> </FadeInSection>
            </div>

            <div className='space__between'>
              <FadeInSection> <Experience /> </FadeInSection>
            </div>

            <FadeInSection> <Contact /> </FadeInSection>

          </main>

          <ScrollToTop />
          <Footer /> 
        </>
      )}
    </div>
  )
}

export default App
