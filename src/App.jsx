import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Certificates from './pages/Certificates.jsx';
import AboutProject from './pages/AboutProject.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Projects Showcase */}
        <Route path="/projects" element={<Projects />} />
        
        {/* Dedicated Certificates Page */}
        <Route path="/certificates" element={<Certificates />} />
        
        {/* About The Project & Engineering Story */}
        <Route path="/about" element={<AboutProject />} />
        <Route path="/about-project" element={<Navigate to="/about" replace />} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contacts" element={<Navigate to="/contact" replace />} />
        
        {/* Legacy Info route redirects to home */}
        <Route path="/info" element={<Navigate to="/" replace />} />
        
        {/* Wildcard redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
