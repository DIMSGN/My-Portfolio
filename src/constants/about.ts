
import { Code2, Rocket, Award } from 'lucide-react';
import { CoreValue } from '../types';

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Clean Code',
    description:
      'I try to write code that makes sense when I (or someone else) comes back to it later.',
    icon: Code2,
  },
  {
    title: 'Always Learning',
    description:
      "There's always something new to learn in web development, and that's what keeps it interesting.",
    icon: Award,
  },
  {
    title: 'Problem Solving',
    description:
      'I like breaking down complex problems into smaller pieces and figuring out how things work.',
    icon: Rocket,
  },
];
