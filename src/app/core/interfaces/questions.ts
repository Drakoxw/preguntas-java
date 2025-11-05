
interface options {
  id: string;
  text: string;
}

export interface IQuestion {
  id: string;
  text: string;
  explanation: string;
  options: options[];
  correctAnswerId: string;
}

export type Level = 'easy' | 'medium' | 'hard';
