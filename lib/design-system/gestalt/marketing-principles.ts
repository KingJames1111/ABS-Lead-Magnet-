// Marketing-Specific Gestalt Principles
// Version: 1.0.0
// Last Updated: 2024-01-09

export const gestaltMarketingPrinciples = {
  flowAndContinuity: {
    advertising: {
      principle: 'Create a visual journey that guides viewers naturally through content',
      implementation: {
        journey: {
          structure: 'Progressive revelation of information',
          elements: [
            'Directional cues (arrows, lines)',
            'Visual weight hierarchy',
            'Consistent movement patterns'
          ],
          techniques: [
            'Use of white space to direct attention',
            'Strategic placement of CTAs',
            'Progressive disclosure of information'
          ]
        },
        attention: {
          guidance: {
            tools: [
              'Leading lines',
              'Gradient flows',
              'Directional icons',
              'Color progression'
            ],
            implementation: 'Subtle yet clear directional cues'
          },
          emphasis: {
            primary: 'Main value proposition',
            secondary: 'Supporting information',
            cta: 'Clear next steps'
          }
        }
      }
    }
  },

  visualStorytelling: {
    principles: {
      narrative: {
        structure: 'Build compelling visual narratives that unfold naturally',
        elements: [
          'Progressive information reveal',
          'Emotional color usage',
          'Dynamic visual hierarchy'
        ]
      },
      experience: {
        design: 'Create immersive experiences rather than just displaying information',
        components: [
          'Interactive elements',
          'Animated transitions',
          'Responsive feedback'
        ]
      }
    },
    implementation: {
      subtle: {
        cues: [
          'Micro-interactions',
          'Color transitions',
          'Shadow depth',
          'Typography scale'
        ],
        purpose: 'Guide without overwhelming'
      },
      bold: {
        elements: [
          'High-contrast sections',
          'Dynamic animations',
          'Feature highlights'
        ],
        usage: 'Create memorable impact points'
      }
    }
  },

  marketingSpecific: {
    valueProposition: {
      visual: {
        hierarchy: 'Clear progression from problem to solution',
        emphasis: 'Highlight key benefits visually',
        flow: 'Natural progression to call-to-action'
      },
      implementation: {
        layout: 'Strategic placement of key messages',
        spacing: 'Breathing room for important points',
        progression: 'Logical flow of information'
      }
    },
    engagement: {
      principles: {
        interaction: 'Encourage active participation',
        feedback: 'Provide visual response to actions',
        progression: 'Guide through conversion funnel'
      },
      techniques: {
        animation: 'Purposeful motion to direct attention',
        contrast: 'Highlight key conversion points',
        timing: 'Strategic reveal of information'
      }
    }
  },

  visualHierarchy: {
    marketing: {
      primary: {
        elements: ['Value proposition', 'Key benefits', 'Call to action'],
        treatment: 'Highest visual prominence'
      },
      secondary: {
        elements: ['Supporting features', 'Social proof', 'Technical details'],
        treatment: 'Balanced visibility'
      },
      tertiary: {
        elements: ['Additional information', 'Legal text', 'Footer content'],
        treatment: 'Subtle yet accessible'
      }
    }
  }
} as const;

// Make marketing principles immutable
Object.freeze(gestaltMarketingPrinciples);