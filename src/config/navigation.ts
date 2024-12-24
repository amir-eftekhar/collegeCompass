import { Home, BookOpen, Briefcase, User, BookMarked, Rss } from 'lucide-react';
import { IconType } from 'lucide-react';

interface NavLink {
  to: string;
  icon: IconType;
  label: string;
}

export const navigationLinks: NavLink[] = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/academic', icon: BookOpen, label: 'Academic Growth' },
  { to: '/career', icon: Briefcase, label: 'Career Readiness' },
  { to: '/story', icon: User, label: 'Your Story' },
  { to: '/feed', icon: Rss, label: 'Feed' },
  { to: '/resources', icon: BookMarked, label: 'Resources' },
];