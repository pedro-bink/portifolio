import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Curriculum from './pages/Curriculum';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

type Props = {};

const Rotas = (props: Props) => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Projects />} path="/projects" />
      <Route element={<Curriculum />} path="/curriculum" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
};

export default Rotas;
