import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        "2xl": "1500px",
        "3xl": "1600px",
        "4xl": "1700px",
      },
      colors: {
        primary: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
        background: "#1c1c22",
        muted: "#747475",
        // #616163
        //#747475
        // #a1a1a1
      },
      keyframes: {
        "spin-projects": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "moving-shadow": {
          "0%": {
            boxShadow: "0px 0px 20px -1px rgba(0, 255, 153, 1)",
            animationDelay: "1s",
          },
          "20%": {
            boxShadow: "0px -2px 20px -1px rgba(0, 255, 153, 1)",
            animationDelay: "1s",
          },
          "40%": {
            boxShadow: "0px 2px 20px -1px rgba(0, 255, 153, 1)",
            animationDelay: "1s",
          },
          "60%": {
            boxShadow: "-2px 0px 20px -1px rgba(0, 255, 153, 1)",
            animationDelay: "1s",
          },
          "80%": {
            boxShadow: "2px 0px 20px -1px rgba(0, 255, 153, 1)",
            animationDelay: "1s",
          },
          "100%": {
            boxShadow: "0px 0px 20px -1px rgba(0, 255, 153, 1)",
            animationDelay: "1s",
          },
        },
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)",
        secondary: "var(--font-hadjet)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "projects-spin": "spin-projects 20s linear infinite",
        "move-shadows": "moving-shadow 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;

export default config;
