import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ResearchLines from '../pages/LinhasDePesquisa';
import Team from '../pages/Colaboradores';
import Contact from '../pages/Contato';
import Projects from '../pages/Projetos';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/researchLines" element={<ResearchLines />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* Adicione outras rotas aqui para redirecionamento de telas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
