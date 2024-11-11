import { DESIGN_SYSTEM } from './index';

// Process section specific content and structure
export const PROCESS_CONTENT = {
  steps: [
    {
      number: "01",
      title: "Define Your Voice",
      subtitle: "Unleash Your Brand's True Power",
      heading: "DISCOVER",
      description: "Unleash your brand's raw power through our AI-Powered Analysis. We don't just capture your voice—we amplify it into a force that commands attention.",
      features: [
        {
          title: "Voice Mastery",
          description: "Forge a signature voice that thunders above the noise"
        },
        {
          title: "Audience Connection",
          description: "Strike deep, lasting chords with your target market"
        },
        {
          title: "Brand Impact",
          description: "Build a presence that ignites action and drives results"
        }
      ]
    },
    {
      number: "02",
      title: "Build Your Brand's Big Brain",
      subtitle: "Neural Codex System",
      heading: "IMAGINE",
      description: "A revolutionary system that becomes the Big Brain of your brand, transforming every piece of content into pure marketing power.",
      features: [
        {
          title: "Pattern Recognition",
          description: "Decode and amplify your brand's winning communication patterns"
        },
        {
          title: "Perceptual Integration",
          description: "Transform audience insights into unstoppable engagement strategies"
        },
        {
          title: "Semantic Harmony",
          description: "Craft messages that resonate with laser precision"
        }
      ]
    },
    {
      number: "03",
      title: "Create & Multiply",
      subtitle: "Scale Your Impact",
      heading: "AMPLIFY",
      description: "Transform every content piece into a multi-channel powerhouse. Turn one spark into 100,000 to 1,000,000+ targeted viewer touchpoints through pure organic reach.",
      features: [
        {
          title: "Content Transformation",
          description: "Turn every idea into an arsenal of high-impact content formats"
        },
        {
          title: "Strategic Distribution",
          description: "Dominate social media, high-traffic platforms, and earned media channels"
        },
        {
          title: "Organic Growth",
          description: "Explode your reach through organic content, not paid ads"
        }
      ]
    },
    {
      number: "04",
      title: "Measure & Refine",
      subtitle: "Optimize for Continuous Growth",
      heading: "OPTIMIZE",
      description: "Supercharge your content performance with AI-Powered Analytics. Transform data into unstoppable market dominance.",
      features: [
        {
          title: "Performance Mastery",
          description: "Track and amplify every engagement metric"
        },
        {
          title: "Audience Intelligence",
          description: "Turn audience insights into strategic advantages"
        },
        {
          title: "Growth Acceleration",
          description: "Scale your impact with data-driven precision"
        }
      ]
    }
  ]
} as const;

// Make process content immutable
Object.freeze(PROCESS_CONTENT);
Object.freeze(PROCESS_CONTENT.steps);
PROCESS_CONTENT.steps.forEach(step => {
  Object.freeze(step);
  Object.freeze(step.features);
});