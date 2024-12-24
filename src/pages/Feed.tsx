import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Briefcase, BookOpen } from 'lucide-react';

interface FeedItem {
  id: string;
  type: 'event' | 'internship' | 'academic';
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
}

const FeedCard: React.FC<FeedItem> = ({ type, title, date, location, description, link }) => {
  const icons = {
    event: Calendar,
    internship: Briefcase,
    academic: BookOpen,
  };

  const Icon = icons[type] || Calendar;

  return (
    <Link to={link} className="block">
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
        <div className="aspect-video bg-[#E4F4C4] rounded-xl mb-6 flex items-center justify-center">
          <Icon className="w-12 h-12 text-[#4C9494]" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[#4C9494]">{title}</h3>
        <div className="space-y-3 mb-4">
          <p className="text-[#5C4C54] flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-[#9CD4AC]" />
            {date}
          </p>
          <p className="text-[#5C4C54] flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-[#9CD4AC]" />
            {location}
          </p>
        </div>
        <p className="text-[#5C4C54]">{description}</p>
      </div>
    </Link>
  );
};

const Feed: React.FC = () => {
  const feedItems: FeedItem[] = [
    {
      id: '1',
      type: 'event',
      title: "College Fair 2024",
      date: "March 20, 2024",
      location: "Local Convention Center",
      description: "Meet representatives from top colleges and universities.",
      link: "/events/college-fair-2024"
    },
    {
      id: '2',
      type: 'internship',
      title: "Summer Tech Internship",
      date: "Applications due April 1, 2024",
      location: "Remote",
      description: "Gain hands-on experience in software development.",
      link: "/opportunities/summer-tech-internship"
    },
    {
      id: '3',
      type: 'academic',
      title: "SAT Prep Workshop",
      date: "March 25, 2024",
      location: "Online",
      description: "Intensive SAT preparation with expert instructors.",
      link: "/events/sat-prep-workshop"
    }
  ];

  const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');

  return (
    <section className="pt-32 pb-20 bg-[#F5F7F9]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4C9494] mb-4">
          Welcome back, {userProfile.name}!
        </h1>
        <p className="text-[#5C4C54] mb-12">Here's what's new in your college prep journey.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedItems.map((item) => (
            <FeedCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feed;