/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient-1": "linear-gradient(180deg, rgba(16, 4, 37, 0.2) 0%, #110729 48.01%)",
        "custom-gradient-2": "linear-gradient(90.26deg, #0C98B7 25.51%, #FF0AE6 88.98%)",
      },
      boxShadow: {
        "custom-inset-1": "inset -75.83px 75.83px 75.83px 0px rgba(255, 255, 255, 0.1)",
        "custom-inset-2": "inset 75.83px -75.83px 75.83px 0px rgba(165, 165, 165, 0.1)",
        "custom-inset-3": "inset 0px -1px 0px 0px rgba(212, 212, 212, 0.57)",
      },
    },
  },
  plugins: [],
};
