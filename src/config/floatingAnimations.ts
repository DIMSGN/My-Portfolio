
import { LucideIcon } from 'lucide-react';
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code,
  Zap,
  Star,
  Heart,
} from "lucide-react";

export const ICON_SETS: Record<string, LucideIcon[]> = {
  default: [Github, ExternalLink, Mail, Sparkles, Download, Linkedin],
  tech: [Code, Github, Zap, Star, ExternalLink, Sparkles],
  social: [Github, Linkedin, Mail, Heart, Star, Download],
  creative: [Sparkles, Star, Heart, Zap, ExternalLink, Code],
};

export const DENSITY_COUNTS: Record<string, number> = {
  minimal: 3,
  normal: 6,
  dense: 9,
};

export const getIconSize = (index: number): number => {
  const sizes = [20, 18, 16, 14, 12, 10, 16, 14, 12];
  return sizes[index % sizes.length] ?? 16;
};
