import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import NavbarSection from '@containers/navbar';
import Footer from '@containers/footer';

function App() {

  return (
    <Router>
      <NavbarSection />
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
