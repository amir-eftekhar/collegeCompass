import React from 'react';
import { User, Mail, Phone, Award } from 'lucide-react';

interface Counselor {
  name: string;
  title: string;
  qualifications: string[];
  email: string;
  phone: string;
  image: string;
}

const counselors: Counselor[] = [
  {
    name: "Mr. Jackson",
    title: "Senior College Counselor",
    qualifications: [
      "20+ years of experience in college admissions",
      "Former Admissions Officer at Stanford University",
      "M.Ed. in Educational Counseling"
    ],
    email: "mjackson@example.com",
    phone: "(555) 123-4567",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
  },
  {
    name: "Mrs. Jackson",
    title: "Career Development Specialist",
    qualifications: [
      "15 years of career counseling experience",
      "Certified Career Development Professional",
      "Ph.D. in Educational Psychology"
    ],
    email: "sjackson@example.com",
    phone: "(555) 234-5678",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&q=80"
  },
  {
    name: "Mx. Jackson",
    title: "Academic Planning Advisor",
    qualifications: [
      "10+ years in academic counseling",
      "Specialized in STEM pathways",
      "M.A. in School Counseling"
    ],
    email: "tjackson@example.com",
    phone: "(555) 345-6789",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80"
  }
];

const Counselors: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-[#F5F7F9]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4C9494] mb-12">College Counselors</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {counselors.map((counselor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={counselor.image} 
                  alt={counselor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#4C9494] mb-2">{counselor.name}</h2>
                <p className="text-[#5C4C54] font-medium mb-4">{counselor.title}</p>
                
                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-[#4C9494] flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Qualifications
                  </h3>
                  <ul className="space-y-2 text-sm text-[#5C4C54]">
                    {counselor.qualifications.map((qual, idx) => (
                      <li key={idx}>{qual}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm">
                  <a href={`mailto:${counselor.email}`} className="flex items-center gap-2 text-[#4C9494] hover:text-[#9CD4AC]">
                    <Mail className="h-4 w-4" />
                    {counselor.email}
                  </a>
                  <p className="flex items-center gap-2 text-[#5C4C54]">
                    <Phone className="h-4 w-4" />
                    {counselor.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counselors;