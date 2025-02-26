/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text_color: "var(--text-color)",
        border_color: "var(--border-color)",
        white_color: "var(--white)",
        bg_intro: "var(--bg-intro)",
        bg_casa: "var(--bg-body)",
        bg_contact: "var(--bg-contact)",
        bg_navbar: "var(--bg-navbar)",
      },
      fontFamily: {
        galdeano: ["Galdeano", "serif"],
      },
    },
  },
  plugins: [],
};
