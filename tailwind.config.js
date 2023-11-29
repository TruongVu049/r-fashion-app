/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primaryColor: "#ff4545",
      secondColor: "#2e2e2e",
      titleMColor: "#212121",
      titleSColor: "#999999",
      titleSMColor: "#757575",
      while05Color: "#666666",
      while10Color: "#fff",
    },
    extend: {
      animation: {
        animationFadeDown: "FadeDown 0.25s ease-in-out",
        animationFadeLeft: "FadeLeft 0.4s cubic-bezier(0.67, 0.04, 0.62, 0.97)",
        animationFadeRight:
          "FadeRight 0.4s cubic-bezier(0.67, 0.04, 0.62, 0.97)",
        animationFadeIn: "FadeIn 0.4s ease-in-out",
      },
      keyframes: {
        FadeDown: {
          "0%": { transform: "translateY(-40px)", opacity: 0.2 },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        FadeLeft: {
          "0%": { opacity: 0.8, transform: "translateX(100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        FadeRight: {
          "0%": { opacity: 0.8, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        FadeIn: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateZ(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
