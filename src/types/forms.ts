export interface Question {
  id: string;
  title: string;
  type: 'select' | 'location' | 'ranked' | 'text';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface QuestionnaireAnswers {
  [key: string]: any;
}

export interface RankedOption {
  option: string;
  rank: number;
}