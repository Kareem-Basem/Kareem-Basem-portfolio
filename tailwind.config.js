/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f5f0e8",
        cream2: "#ede8df",
        parchment: "#fdfcf9",
        amber: "#f0a500",
        amber2: "#e8920a",
        teal: "#2a9d8f",
        teal2: "#1f7a6e",
        coral: "#e76f51",
        lav: "#b8a9d9",
        ink: "#1a1a2e",
        ink2: "#2d2d44",
        muted: "#8a8a9a",
        muted2: "#5a5a72",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      animation: {
        morph: "morph 9s ease-in-out infinite",
        morph2: "morph2 11s ease-in-out infinite",
        ping2: "ping2 2s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        morph: {
          "0%,100%": { borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", transform: "rotate(0deg)" },
          "40%": { borderRadius: "50% 50% 40% 60% / 60% 40% 55% 45%", transform: "rotate(7deg) scale(1.03)" },
          "70%": { borderRadius: "40% 60% 60% 40% / 45% 55% 45% 55%", transform: "rotate(-4deg)" },
        },
        morph2: {
          "0%,100%": { borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%" },
          "50%": { borderRadius: "55% 45% 60% 40% / 40% 60% 40% 60%", transform: "rotate(10deg) scale(1.05)" },
        },
        ping2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.4)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
