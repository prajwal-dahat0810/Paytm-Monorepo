const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        helvitika: ["sohne-var", "Helvetica Neue", "Arial"],
        custom: ["sohne-var", "Helvetica Neue", "Arial", "sans-serif"],
      },

      transitionDuration: {
        1800: "1800ms", // 1.8s duration
      },
      transitionDelay: {
        50: "50ms", // 50ms delay
      },
      transitionTimingFunction: {
        "ease-in": "cubic-bezier(0.42, 0, 1, 1)", // Default ease-in curve
      },
      keyframes: {
        moveBackground: {
          "0%": { backgroundPosition: "0% 50%" }, // Start at left
          "100%": { backgroundPosition: "200% 50%" }, // Move to right
        },
        colors: {
          "purple-custom": "#a960ee",
          "red-custom": "#ff333d",
          "yellow-custom": "#ffcb57",
          "cyan-custom": "#57eaff",
          "pink-custom": "#ff8fb1",
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      sat: {
        first: "moveHorizontal 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        bv: "moveBackground 8s linear infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
