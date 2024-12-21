import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%", // Full width for small screens
          md: "640px", // Adjust width for medium screens
          lg: "800px", // Less width for large screens
          xl: "960px", // Less width for extra large screens
          "2xl": "1120px", // Less width for 2XL screens
        },
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
