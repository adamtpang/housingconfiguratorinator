export const palette = {
  // Neutral / Base
  background: "#FFFFFF",
  foreground: "#1D1D1F", // Apple-like near black
  subtle: "#F5F5F7", // Apple-like light gray background
  border: "#D2D2D7",

  // Primary Brand (Network School Blue - Placeholder)
  primary: "#0071E3", // Apple Blue
  primaryForeground: "#FFFFFF",

  // Accents
  success: "#34C759",
  warning: "#FF9F0A",
  error: "#FF3B30",

  // UI Specific
  card: "#FFFFFF",
  cardForeground: "#1D1D1F",
  muted: "#86868B",
  mutedForeground: "#86868B",
} as const;

export const colors = {
  ...palette,
  // Semantic aliases
  pageBackground: palette.subtle,
  panelBackground: palette.background,
} as const;
