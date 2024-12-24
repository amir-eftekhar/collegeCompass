import React from 'react';
import { Calendar, MapPin, Briefcase, BookOpen } from 'lucide-react';

interface FeedItem {
  type: 'event' | 'internship' | 'academic';
  title: string;
  date: string;
  location: string;
  description: string; 
}

const FeedCard: React.FC<FeedItem> = ({ type, title, date, location, description }) => {
  const icons = {
    event: Calendar,
    internship: Briefcase,
    academic: BookOpen,
  };

  const Icon = icons[type] || Calendar;

  return (
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
  );
};

const Dashboard: React.FC = () => {
  const feedItems: FeedItem[] = [
    {
      type: 'event',
      title: "College Fair 2024",
      date: "March 20, 2024",
      location: "Local Convention Center",
      description: "Meet representatives from top colleges and universities."
    },
    {
      type: 'internship',
      title: "Summer Tech Internship",
      date: "Applications due April 1, 2024",
      location: "Remote",
      description: "Gain hands-on experience in software development."
    },
    {
      type: 'academic',
      title: "SAT Prep Workshop",
      date: "March 25, 2024",
      location: "Online",
      description: "Intensive SAT preparation with expert instructors."
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-[#F5F7F9]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4C9494] mb-12">Your Dashboard</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedItems.map((item, index) => (
            <FeedCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;