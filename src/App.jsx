import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Featured from './pages/Featured';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="px-6 py-10 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
