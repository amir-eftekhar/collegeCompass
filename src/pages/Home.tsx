import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Target, Users } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="bg-[#E4F4C4] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-[#4C9494] mb-2">{title}</h3>
    <p className="text-[#5C4C54]">{description}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <div className="container mx-auto px-6">
        <div className="pt-32 pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Compass className="w-20 h-20 text-[#4C9494]" />
            </div>
            <h1 className="text-5xl font-bold text-[#4C9494] mb-6">
              College Prep Compass
            </h1>
            <p className="text-xl text-[#5C4C54] mb-12">
              Navigate your path to college success with personalized guidance, tools, and resources
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/login"
                className="px-8 py-3 text-[#4C9494] border-2 border-[#4C9494] rounded-lg hover:bg-[#4C9494] hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 bg-[#4C9494] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="pb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<BookOpen className="h-6 w-6 text-[#4C9494]" />}
              title="Academic Growth"
              description="Track your progress, set goals, and get personalized study plans"
            />
            <FeatureCard
              icon={<Target className="h-6 w-6 text-[#4C9494]" />}
              title="Career Guidance"
              description="Explore career paths and get matched with opportunities"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-[#4C9494]" />}
              title="Community Support"
              description="Connect with peers and mentors on your college journey"
            />
          </div>
        </div>

        {/* Credits */}
        <div className="text-center pb-8">
          <p className="text-sm text-[#5C4C54]">
            Created by{' '}
            <span className="text-[#4C9494]">Nikhilesh Suravarjjala</span>,{' '}
            <span className="text-[#4C9494]">Amir Eftekhar</span>, and{' '}
            <span className="text-[#4C9494]">Diva Rawal</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;