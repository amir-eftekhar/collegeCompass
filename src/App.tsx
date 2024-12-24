import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import PancakeMenu from './components/PancakeMenu';
import Footer from './components/Footer';
import AppRoutes from './routes';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = ['/', '/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#F5F7F9] flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {!isAuthPage && (
        <>
          <PancakeMenu />
          <Footer />
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;