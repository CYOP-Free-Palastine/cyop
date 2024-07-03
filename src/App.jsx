import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes';
import NavbarSection from '@containers/navbar';
import Footer from '@containers/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppW() {
  const location = useLocation();

  const isTemplateRoute = location.pathname.startsWith('/templates/');

  return (
    <>
      <ToastContainer />
      {!isTemplateRoute && <NavbarSection />}
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      {!isTemplateRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppW />
    </Router>
  );
}

export default App;