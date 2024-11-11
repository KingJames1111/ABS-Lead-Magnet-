// Visual Guidelines Reference
// Version: 1.0.0
// Last Updated: 2024-01-09

export const visualGuidelines = {
  infographics: {
    principles: {
      simplicity: {
        rule: 'Present complex ideas in simple, digestible ways',
        implementation: [
          'Break down complex concepts into simple visual elements',
          'Use clear visual hierarchy',
          'Limit information density per section'
        ]
      },
      flow: {
        rule: 'Create natural movement and direction',
        implementation: [
          'Use arrows and flowing lines for direction',
          'Guide viewer through content seamlessly',
          'Maintain consistent movement patterns'
        ]
      },
      depth: {
        rule: 'Add visual hierarchy through light and shadow',
        implementation: [
          'Use shadows to create depth',
          'Layer information meaningfully',
          'Highlight key information through contrast'
        ]
      }
    },
    composition: {
      layout: {
        grid: 'Use grid system for alignment',
        spacing: 'Maintain consistent spacing',
        hierarchy: 'Clear visual hierarchy'
      },
      colors: {
        usage: 'Strategic use of brand colors',
        contrast: 'Ensure readability',
        meaning: 'Color coding for information types'
      }
    }
  },

  iconography: {
    systemRules: {
      consistency: {
        rule: 'Maintain consistent icon style',
        implementation: [
          'Use Lucide React as primary icon system',
          'Consistent stroke width',
          'Uniform padding and sizing'
        ]
      },
      flexibility: {
        rule: 'Allow contextual adaptation',
        implementation: [
          'Adapt colors to slide themes',
          'Scale appropriately for context',
          'Maintain recognizability at different sizes'
        ]
      }
    },
    animation: {
      principles: {
        subtlety: 'Use subtle, purposeful animations',
        timing: 'Consistent animation duration',
        purpose: 'Enhance understanding and engagement'
      },
      types: {
        sliding: {
          usage: 'Directional movement',
          duration: '300ms',
          easing: 'ease-in-out'
        },
        scaling: {
          usage: 'Emphasis and focus',
          duration: '200ms',
          easing: 'ease-out'
        },
        rotation: {
          usage: 'Loading or processing states',
          duration: '1s',
          easing: 'linear'
        }
      }
    },
    usage: {
      navigation: {
        purpose: 'Guide user through interface',
        examples: ['Arrows', 'Menu icons', 'Close buttons']
      },
      illustration: {
        purpose: 'Enhance content understanding',
        examples: ['Feature icons', 'Process diagrams', 'Status indicators']
      },
      interaction: {
        purpose: 'Indicate interactive elements',
        examples: ['Buttons', 'Links', 'Form elements']
      }
    }
  },

  motionGuidelines: {
    principles: {
      purpose: 'Enhance user experience and understanding',
      timing: 'Consistent, appropriate animation durations',
      performance: 'Optimize for smooth animations'
    },
    interactions: {
      hover: {
        duration: '200ms',
        effect: 'Subtle scale or color change'
      },
      click: {
        duration: '100ms',
        effect: 'Quick feedback animation'
      },
      transition: {
        duration: '300ms',
        effect: 'Smooth state changes'
      }
    }
  }
} as const;

// Make guidelines immutable
Object.freeze(visualGuidelines);