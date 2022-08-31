/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        "90px": "90px",
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        bg: {
          1: "#F8F9FA",
          2: "#E4EDF2",
          3: "#E4E0E0",
          5: "#CFD4D9",
          7: "#6E757C",
          8: "#4A5056",
          10: "#222529",
          
        },
        white: {
          1: "#FFFFFFCC",
          2: "#FFFFFF",
        },
        bb: {
          1: "#DFEBF2",
          2: "#272D71",
        },
        pp: {
          1: "#0316E1",
          2: "#9314F5",
        },
        accent: {
          1: "#0316E1",
        },
      },
    },
  },
  plugins: [],
};