/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        uisans: ["ui-sans-serif", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        inria: ["Inria Sans", "sans-serif"],
      },
      colors: {
        darkblue: "#022047",
        darkred: "#7d0000",
        graytext: "#858585",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          default: "1460px",
          "3xl": "1460px",
          "2xl": "1460px",
          xl: "1280px",
          lg: "1024px",
          md: "768px",
          sm: "640px",
        },
      },
    },
  },
  plugins: [],
};
