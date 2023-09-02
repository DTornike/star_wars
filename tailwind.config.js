const COLOR_NAMES = {
  primary: "primary",
  secondary: "secondary",
  gray: "gray",
  green: "green",
  error: "error",
};

const COLORS = {
  [COLOR_NAMES.primary]: {
    DEFAULT: "#F26C4C",
    light: "#e8c2bc",
  },
  [COLOR_NAMES.secondary]: {
    DEFAULT: "#524F67",
  },
  [COLOR_NAMES.gray]: {
    DEFAULT: "#AFADBE",
  },
  [COLOR_NAMES.green]: {
    DEFAULT: "#5BA396",
  },
  [COLOR_NAMES.error]: {
    DEFAULT: "#ff494a",
  },
};

const colors = {
  [COLOR_NAMES.primary]: COLORS[COLOR_NAMES.primary],
  [COLOR_NAMES.secondary]: COLORS[COLOR_NAMES.secondary],
  [COLOR_NAMES.gray]: COLORS[COLOR_NAMES.gray],
  [COLOR_NAMES.green]: COLORS[COLOR_NAMES.green],
  [COLOR_NAMES.error]: COLORS[COLOR_NAMES.error],
};

const fontSize = {
  captions: "12px",
  paragraph: "14px",
  headerOne: "20px",
};

const fontFamily = {
  primary: "Ubuntu",
};

const container = {
  center: true,
  padding: {
    DEFAULT: "15px",
  },
  screens: {
    "2xl": "1360px",
  },
};

const boxShadow = {
  DEFAULT: "3px 3px 11px #d7d7d7",
  sm: "3px 3px 34px #d7d7d7;",
};

const borderRadius = {
  DEFAULT: "8px",
};

const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1520px",
  "3xl": "1820px",
};

// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/Logo.tsx.html"],
  theme: {
    extend: {
      screens,
      container,
      fontSize,
      colors,
      fontFamily,
      boxShadow,
      borderRadius,
    },
  },
  plugins: [],
};
