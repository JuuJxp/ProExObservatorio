import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ResearchLines from '../pages/LinhasDePesquisa';
import TeamMates from '../pages/Colaboradores';
import Contact from '../pages/Contato';
import Projects from '../pages/Projetos';
import Extras from '../pages/Revista';
import Research from '../pages/Pesquisa';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/researchLines" element={<ResearchLines />} />
        <Route path="/team" element={<TeamMates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
