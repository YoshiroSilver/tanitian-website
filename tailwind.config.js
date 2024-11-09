/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#46a2b9",
        "primary-content": "#000000",
        "primary-dark": "#388294",
        "primary-light": "#6bb5c7",

        secondary: "#9646b9",
        "secondary-content": "#ffffff",
        "secondary-dark": "#783894",
        "secondary-light": "#ab6bc7",

        background: "#181b1b",
        foreground: "#232829",
        border: "#3b4345",

        copy: "#fbfbfb",
        "copy-light": "#d6dadc",
        "copy-lighter": "#9faaac",

        success: "#46b946",
        warning: "#b9b946",
        error: "#b94646",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#ffffff"
    },
    },
  },
  plugins: [],
};
