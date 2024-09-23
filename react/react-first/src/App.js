import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import Gallery from './components/gallery';
import Team from './components/team';
import Pricing from './components/pricing';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap';  // Bootstrap JavaScript
import '@popperjs/core';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Team />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

export default App;
