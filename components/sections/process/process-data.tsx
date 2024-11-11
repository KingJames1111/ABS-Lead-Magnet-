import { Brain, Target, Rocket, Sparkles } from "lucide-react";
import { ProcessStep } from "./types";
import { StyledDescription } from "./StyledDescription";

export const processSteps: ProcessStep[] = [
  {
    number: "02",
    icon: Brain,
    title: "Build Your Brand's Big Brain",
    subtitle: "ABS's Neural Codex System - Your Own AI Mini Neural Network",
    heading: "IMAGINE",
    description: StyledDescription,
    features: [
      {
        title: "Pattern Recognition",
        description: "Decode and amplify winning communication patterns"
      },
      {
        title: "Perceptual Integration",
        description: "Transform insights into engagement strategies"
      },
      {
        title: "Semantic Harmony",
        description: "Craft messages that resonate with precision"
      }
    ]
  },
  // Other steps remain the same...
];