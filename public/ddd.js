/**
 * DDD Design System - Frostbite Hockey Academy
 * Defines CSS Variables for consistency.
 */
const ddd = {
  theme: {
    colors: {
      primary: "#00205B", // Navy Blue (replaces their #003063)
      secondary: "#041E42",
      accent: "#B9975B", // Gold accent
      ice: "#E3F2FD",
      alert: "#D32F2F",
      white: "#FFFFFF",
      gray: "#F5F5F5",
      darkGray: "#333333"
    },
    fonts: {
      primary: "'Roboto', sans-serif",
      display: "'Bebas Neue', sans-serif"
    },
    spacing: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px"
    },
    borders: {
      radius: "8px",
      card: "1px solid #e0e0e0"
    }
  }
};

// Inject variables into root
const root = document.documentElement;

// Colors
root.style.setProperty('--ddd-primary', ddd.theme.colors.primary);
root.style.setProperty('--ddd-secondary', ddd.theme.colors.secondary);
root.style.setProperty('--ddd-accent', ddd.theme.colors.accent);
root.style.setProperty('--ddd-ice', ddd.theme.colors.ice);
root.style.setProperty('--ddd-alert', ddd.theme.colors.alert);
root.style.setProperty('--ddd-white', ddd.theme.colors.white);
root.style.setProperty('--ddd-gray', ddd.theme.colors.gray);
root.style.setProperty('--ddd-dark-gray', ddd.theme.colors.darkGray);

// Fonts
root.style.setProperty('--ddd-font-primary', ddd.theme.fonts.primary);
root.style.setProperty('--ddd-font-display', ddd.theme.fonts.display);

// Spacing
root.style.setProperty('--ddd-spacing-xs', ddd.theme.spacing.xs);
root.style.setProperty('--ddd-spacing-sm', ddd.theme.spacing.sm);
root.style.setProperty('--ddd-spacing-md', ddd.theme.spacing.md);
root.style.setProperty('--ddd-spacing-lg', ddd.theme.spacing.lg);
root.style.setProperty('--ddd-spacing-xl', ddd.theme.spacing.xl);

// Borders
root.style.setProperty('--ddd-radius', ddd.theme.borders.radius);
root.style.setProperty('--ddd-border-card', ddd.theme.borders.card);

console.log("DDD Design System Loaded");