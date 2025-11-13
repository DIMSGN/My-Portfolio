
import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export interface FloatingElementsProps {
  variant?: 'default' | 'tech' | 'social' | 'creative';
  density?: 'minimal' | 'normal' | 'dense';
}

export interface GlassSectionProps {
  children: ReactNode;
  showDecorations?: boolean;
  floatingVariant?: 'default' | 'tech' | 'social' | 'creative';
  floatingDensity?: 'minimal' | 'normal' | 'dense';
}
