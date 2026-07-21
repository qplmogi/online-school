import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemCards from './components/ProblemCards';
import HowWeHelp from './components/HowWeHelp';
import Services from './components/Services';
import Teachers from './components/Teachers';
import ArticleCard from './components/ArticleCard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProblemCards />
      <HowWeHelp />
      <Services />
      <Teachers />
      <ArticleCard />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
