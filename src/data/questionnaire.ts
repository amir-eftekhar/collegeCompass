import { Question } from '../types/forms';

export const questions: Question[] = [
  {
    id: 'grade',
    title: 'What grade are you in?',
    type: 'select',
    options: ['9th Grade', '10th Grade', '11th Grade', '12th Grade'],
    required: true
  },
  {
    id: 'location',
    title: 'Where do you live?',
    type: 'location',
    required: true
  },
  {
    id: 'skills',
    title: 'What are your top skills? (Rank your top 3)',
    type: 'ranked',
    options: ['Public Speaking', 'Writing', 'Mathematics', 'Science', 'Art', 'Music', 'Programming', 'Leadership'],
    required: true
  },
  {
    id: 'interests',
    title: 'What are your areas of interest? (Rank your top 3)',
    type: 'ranked',
    options: ['STEM', 'Arts & Humanities', 'Business', 'Social Sciences', 'Healthcare', 'Education'],
    required: true
  },
  {
    id: 'career',
    title: 'What career paths interest you?',
    type: 'text',
    placeholder: 'E.g., Software Engineer, Doctor, Artist...',
    required: true
  }
];