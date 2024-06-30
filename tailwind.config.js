/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue_bg: "#111827",
        secondaryBlue_bg: '#1f2937',
        lightBlue_bg: '#374151',
        card_bg: "#1e293b",
        primary_card_color: "#cbd5e1",
        secondary_card_color: "#8b9aae",
        secondary_button_bg: "#334155",
        primaryBlue: "#2563eb",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

