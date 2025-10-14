export enum TabID {
  Slides = 'slides',
  Guide = 'guide',
  Quiz = 'quiz',
  Certificate = 'certificate',
}

export interface SlideContent {
  type: 'title' | 'bullets' | 'definition' | 'table' | 'prompt' | 'final';
  title?: string;
  subtitle?: string;
  footer?: string;
  presenter?: string;
  content?: string | string[];
  notes?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export enum QuestionType {
  ShortAnswer = 'short-answer',
  MultipleChoice = 'multiple-choice',
  TrueFalse = 'true-false',
  Reflection = 'reflection',
}

export interface QuizQuestion {
  id: number;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer?: string | string[];
}

export interface FacilitatorGuideSection {
    title: string;
    content: (string | { type: 'strong' | 'weak'; text: string })[];
}
