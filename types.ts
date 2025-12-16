import { ReactNode } from 'react';

export enum SlideType {
  INTRO = 'INTRO',
  INSTRUCTION = 'INSTRUCTION',
  CODE = 'CODE',
  SUCCESS = 'SUCCESS'
}

export interface SlideStep {
  id: string;
  title: string;
  type: SlideType;
  content: ReactNode;
  code?: string; // For CODE type
  codeLanguage?: string;
  image?: string; // URL for placeholder
  note?: string; // Extra tip
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}