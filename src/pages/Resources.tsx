import React from 'react';
import { BookOpen, Briefcase, Video, GraduationCap, Calendar } from 'lucide-react';

interface ResourceLink {
  title: string;
  description: string;
  url: string;
}

interface ResourceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  links: ResourceLink[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon: Icon, title, description, links }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
    <div className="aspect-video bg-[#E4F4C4] rounded-xl mb-6 flex items-center justify-center">
      <Icon className="w-12 h-12 text-[#4C9494]" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-[#4C9494]">{title}</h3>
    <p className="text-[#5C4C54] mb-6">{description}</p>
    <div className="space-y-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-[#F5F7F9] rounded-lg hover:bg-[#E4F4C4] transition-colors"
        >
          <p className="font-medium text-[#4C9494]">{link.title}</p>
          <p className="text-sm text-[#5C4C54]">{link.description}</p>
        </a>
      ))}
    </div>
  </div>
);

const Resources: React.FC = () => {
  const resources = [
    {
      icon: Calendar,
      title: "High School Planning Resources",
      description: "Essential tools for planning your high school journey",
      links: [
        {
          title: "4-Year Planning Guide",
          description: "Comprehensive guide for planning your high school years",
          url: "#"
        },
        {
          title: "Course Selection Tips",
          description: "How to choose the right classes for your goals",
          url: "#"
        }
      ]
    },
    {
      icon: BookOpen,
      title: "Study Resources",
      description: "Tools and materials for academic success",
      links: [
        {
          title: "Study Techniques",
          description: "Effective study methods and strategies",
          url: "#"
        },
        {
          title: "Subject Guides",
          description: "Detailed guides for core subjects",
          url: "#"
        }
      ]
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Resources for career exploration and planning",
      links: [
        {
          title: "Career Exploration Guide",
          description: "Tools to help you explore different career paths",
          url: "#"
        },
        {
          title: "Interview Preparation",
          description: "Tips for successful interviews",
          url: "#"
        }
      ]
    },
    {
      icon: Video,
      title: "Inspirational Content",
      description: "Success stories and motivational resources",
      links: [
        {
          title: "Student Success Stories",
          description: "Real stories from successful students",
          url: "#"
        },
        {
          title: "Motivational Talks",
          description: "Inspiring presentations from leaders",
          url: "#"
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "College Application Prep",
      description: "Resources for college applications",
      links: [
        {
          title: "Application Timeline",
          description: "Step-by-step guide to the application process",
          url: "#"
        },
        {
          title: "Essay Writing Guide",
          description: "Tips for writing compelling college essays",
          url: "#"
        }
      ]
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-[#F5F7F9]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4C9494] mb-12">Resources</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;