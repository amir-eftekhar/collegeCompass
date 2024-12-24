import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4C9494] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8" />
              <span className="font-bold text-xl">College Prep Compass</span>
            </div>
            <p className="text-[#E4F4C4]">
              Your Guide to High School Success and Beyond
            </p>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/academic" className="hover:text-[#E4F4C4]">Academic Growth</Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-[#E4F4C4]">Career Readiness</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#E4F4C4]">Study Tips</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center space-x-2 hover:text-[#E4F4C4]">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-[#E4F4C4]">
                <MessageSquare className="h-5 w-5" />
                <span>Join Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E4F4C4] mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              © 2024 College Prep Compass. Created by Nikhilesh Suravarjjala, Amir Eftekhar, and Diva Rawal.
            </div>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-[#E4F4C4]">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#E4F4C4]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;