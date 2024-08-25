import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          },
          "50%": {
            transform:"scaleY(1.5)"
          }
        }
      },
      animation:{
        wavey: "wavey 1000ms linear infinite",
      },
    },
  },

  plugins: [require("./plugins/openVariant"), require("./plugins/animationDelay")],
};

export default config;
