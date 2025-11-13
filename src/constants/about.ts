
import { Code2, Rocket, Award } from 'lucide-react';
import { CoreValue } from '../types';

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Clean Code',
    description:
      'Writing maintainable, scalable, and well-documented code that stands the test of time.',
    icon: Code2,
  },
  {
    title: 'Continuous Learning',
    description:
      'Staying current with emerging technologies and best practices in development.',
    icon: Award,
  },
  {
    title: 'Problem-Solving',
    description:
      'Approaching challenges methodically, understanding systems end-to-end, and finding elegant solutions.',
    icon: Rocket,
  },
];
