/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        /* BRAND */
        primary: "#155a27",     // Deep institutional green
        secondary: "#e22025",
        dark:'#0b2d14',   // Strong red accent

        /* BACKGROUND */
        background: "#f8faf9",
        card: "#ffffff",
        border: "#d9e2dc",

        /* TEXT */
        text: {
          primary: "#0f172a",
          secondary: "#475569",
          muted: "#94a3b8",
          light: "#f1f5f9",
          text:"#051F10",
          fade:"#b6b6b6"
        },

        /* STATUS COLORS */
        success: "#16a34a",   // Matches green tone
        warning: "#f59e0b",
        danger: "#dc2626",
        info: "#2563eb",

        /* HIGHLIGHT STATES */
        hover: {
          primary: "#1f7a3a",    // Lighter green hover
          secondary: "#ff3b3f"   // Brighter red hover
        },

        /* FORM COLORS */
        input: {
          bg: "#ffffff",
          border: "#cbd5e1",
          focus: "#155a27"
        },

        /* CHART COLORS */
        chart: {
          green: "#155a27",
          red: "#e22025",
          blue: "#2563eb",
          orange: "#fb923c",
          purple: "#7c3aed",
          gray: "#64748b"
        }
      }
    }
  },
  plugins: [],
};


