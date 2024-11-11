import { gestaltPrinciples } from './principles';
import { gestaltPatterns } from './patterns';

export const gestaltExamples = {
  cards: {
    productCard: {
      principles: ['proximity', 'similarity'],
      implementation: `
        .product-card {
          padding: ${gestaltPatterns.components.cards.padding};
          border-radius: ${gestaltPatterns.components.cards.borderRadius};
          box-shadow: ${gestaltPatterns.components.cards.shadow};
          display: flex;
          flex-direction: column;
          gap: ${gestaltPatterns.layout.spacing.md};
        }
      `
    },
    contentCard: {
      principles: ['figureGround', 'closure'],
      implementation: `
        .content-card {
          background: var(--surface);
          color: var(--on-surface);
          padding: ${gestaltPatterns.components.cards.padding};
          border-radius: ${gestaltPatterns.components.cards.borderRadius};
        }
      `
    }
  },

  navigation: {
    mainNav: {
      principles: ['continuity', 'similarity'],
      implementation: `
        .main-nav {
          display: flex;
          gap: ${gestaltPatterns.components.navigation.spacing};
          align-items: ${gestaltPatterns.components.navigation.alignment};
        }
      `
    }
  },

  layout: {
    contentGrid: {
      principles: ['symmetry', 'proximity'],
      implementation: `
        .content-grid {
          display: grid;
          grid-template-columns: repeat(${gestaltPatterns.layout.grid.columns}, 1fr);
          gap: ${gestaltPatterns.layout.grid.gutter};
          margin: ${gestaltPatterns.layout.grid.margins};
        }
      `
    }
  }
};