import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TellUsMore: React.FC = () => {
  const [story, setStory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const tempUserData = sessionStorage.getItem('tempUserData');
    const questionnaireData = sessionStorage.getItem('questionnaireData');
    if (!tempUserData || !questionnaireData) {
      navigate('/signup');
      return;
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tempUserData = JSON.parse(sessionStorage.getItem('tempUserData') || '{}');
    const questionnaireData = JSON.parse(sessionStorage.getItem('questionnaireData') || '{}');
    
    const userData = {
      ...tempUserData,
      questionnaire: questionnaireData,
      story,
      onboardingComplete: true
    };
    
    // Store complete user profile
    localStorage.setItem('userProfile', JSON.stringify(userData));
    
    // Clean up session storage
    sessionStorage.removeItem('tempUserData');
    sessionStorage.removeItem('questionnaireData');
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#4C9494] mb-4">Tell us more!</h2>
          <p className="text-[#5C4C54]">
            Share anything else you'd like us to know about you - your dreams, challenges, 
            or what you hope to achieve with College Prep Compass.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C9494] focus:border-transparent"
            placeholder="Your story here..."
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-3 bg-[#4C9494] text-white rounded-lg hover:bg-opacity-90"
            >
              <span>I'm done!</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TellUsMore;