import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heading: string;
  description: React.ReactNode;
  features: Feature[];
}