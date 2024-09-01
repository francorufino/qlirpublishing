/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        mwhite: "#fbf9f7",
        mdwhite: "#f9f6f2",
        mbrown: "#e1dbd6",
        mdbrown: "#70580e",
        mlgray: "#e2e2e2",
        mgray: "#f0f2f0",
        mdgray: "#d1d1d1",
        mddgray: "#6e736e",
        myellow: "#ffce00",
        mblack: "#1a1a14"
      }
    }
  },
  plugins: []
};

//
