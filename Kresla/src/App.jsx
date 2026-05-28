import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Mission from './pages/Mission';
import Projects from './pages/Projects';
import Advantages from './pages/Advantages';
import Testimonials from './pages/Testimonials';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/advantages" element={<Advantages />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;