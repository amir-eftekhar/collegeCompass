import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Questionnaire from '../pages/auth/Questionnaire';
import TellUsMore from '../pages/auth/TellUsMore';
import Dashboard from '../pages/Dashboard';
import AcademicGrowth from '../pages/AcademicGrowth';
import CareerReadiness from '../pages/CareerReadiness';
import PersonalStory from '../pages/PersonalStory';
import Resources from '../pages/Resources';
import Counselors from '../pages/Counselors';
import GPACalculator from '../pages/resources/GPACalculator';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('userProfile') !== null;
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('userProfile') !== null;
  return !isLoggedIn ? <>{children}</> : <Navigate to="/dashboard" />;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
      <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />
      
      {/* Auth flow routes */}
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/tell-us-more" element={<TellUsMore />} />
      
      {/* Protected routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/academic" element={<ProtectedRoute><AcademicGrowth /></ProtectedRoute>} />
      <Route path="/career" element={<ProtectedRoute><CareerReadiness /></ProtectedRoute>} />
      <Route path="/story" element={<ProtectedRoute><PersonalStory /></ProtectedRoute>} />
      <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
      <Route path="/counselors" element={<ProtectedRoute><Counselors /></ProtectedRoute>} />
      
      {/* Resource pages */}
      <Route path="/resources/gpa-calculator" element={<ProtectedRoute><GPACalculator /></ProtectedRoute>} />
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;