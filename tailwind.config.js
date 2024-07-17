/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      urbanist: "Urbanist, sans",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      colors: {
        white100: "#ffffff",
        black100: "#000000",
        main: "#0d0d0d",
        purple: {
          60: "#703BF7",
          65: "#8254F8",
          70: "#946CF9",
          75: "#A685FA",
          90: "#DBCEFD",
          95: "#EDE7FE",
          97: "#F4F0FE",
          99: "#FBFAFF",
        },
        white: {
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        grey: {
          8: "#141414",
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          50: "#808080",
          60: "#999999",
        },
      },
    },
  },
  plugins: [],
};
