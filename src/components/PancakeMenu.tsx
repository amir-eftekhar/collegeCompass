import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, BookOpen, Briefcase, User, BookMarked, Home, Phone, LogOut } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface MenuLinkProps {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
  onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, icon: Icon, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        isActive 
          ? 'bg-[#E4F4C4] text-[#4C9494]' 
          : 'text-[#5C4C54] hover:bg-[#E4F4C4] hover:text-[#4C9494]'
      }`}
    >
      <Icon className={`h-5 w-5 ${isActive ? 'text-[#4C9494]' : 'text-[#5C4C54]'}`} />
      <span>{children}</span>
    </Link>
  );
};

const PancakeMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    document.addEventListener('togglePancakeMenu', handleToggle);
    return () => document.removeEventListener('togglePancakeMenu', handleToggle);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSignOut = () => {
    localStorage.removeItem('userProfile');
    navigate('/');
    handleClose();
  };

  return (
    <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-200 ease-in-out z-50 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="flex flex-col h-full pt-16">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-[#4C9494]">Menu</h2>
          <button
            onClick={handleClose}
            className="p-2 text-[#5C4C54] hover:bg-[#E4F4C4] rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          <MenuLink to="/dashboard" icon={Home} onClick={handleClose}>Dashboard</MenuLink>
          <MenuLink to="/academic" icon={BookOpen} onClick={handleClose}>Academic Growth</MenuLink>
          <MenuLink to="/career" icon={Briefcase} onClick={handleClose}>Career Readiness</MenuLink>
          <MenuLink to="/story" icon={User} onClick={handleClose}>Your Story</MenuLink>
          <MenuLink to="/resources" icon={BookMarked} onClick={handleClose}>Resources</MenuLink>
          <MenuLink to="/counselors" icon={Phone} onClick={handleClose}>Contact Counselors</MenuLink>
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PancakeMenu;