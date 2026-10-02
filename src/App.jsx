import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import ResearchArea from './pages/ResearchArea';
import Fitness from './pages/Fitness';
import About from './pages/About';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, marginTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proje" element={<Project />} />
          <Route path="/arastirma/:id" element={<ResearchArea />} />
          <Route path="/fiziksel-uygunluk" element={<Fitness />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/is-birlikleri" element={<Collaborations />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
