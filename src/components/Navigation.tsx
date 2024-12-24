import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Compass, Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('userProfile') !== null;
  const isAuthPage = ['/', '/login', '/signup'].includes(location.pathname);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed w-full px-6 py-4 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl">
          <div className="flex items-center justify-between h-16 px-6">
            <a href="#" onClick={handleLogoClick} className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-[#4C9494]" />
              <span className="font-bold text-xl text-[#4C9494]">College Prep Compass</span>
            </a>

            {!isLoggedIn ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-[#4C9494] hover:text-opacity-80 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-[#4C9494] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            ) : !isAuthPage && (
              <button
                onClick={() => document.dispatchEvent(new CustomEvent('togglePancakeMenu'))}
                className="p-2 text-[#4C9494] hover:bg-[#E4F4C4] rounded-lg transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;