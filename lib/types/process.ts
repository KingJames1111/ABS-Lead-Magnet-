import { LucideIcon } from "lucide-react";

export interface ProcessFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  features: ProcessFeature[];
}

export interface ProcessCardProps extends ProcessStep {
  isLarge?: boolean;
  delay?: number;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  isLarge?: boolean;
}