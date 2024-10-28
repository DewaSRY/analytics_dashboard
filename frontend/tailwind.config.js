/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enables dark mode based on a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Paths to your template files
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-350": "repeat(auto-fit, minmax(350px, 1fr))",
      },
      borderRadius: {
        lg: "var(--radius)", // Large border radius using CSS variable
        md: "calc(var(--radius) - 2px)", // Medium border radius
        sm: "calc(var(--radius) - 4px)", // Small border radius
      },
      colors: {
        background: "var(--background)", // Background color
        foreground: "var(--foreground)", // Foreground color
        card: {
          DEFAULT: "var(--card)", // Default card color
          foreground: "var(--card-foreground)", // Card foreground color
        },
        popover: {
          DEFAULT: "var(--popover)", // Default popover color
          foreground: "var(--popover-foreground)", // Popover foreground color
        },
        primary: {
          DEFAULT: "var(--primary)", // Default primary color
          foreground: "var(--primary-foreground)", // Primary foreground color
        },
        secondary: {
          DEFAULT: "var(--secondary)", // Default secondary color
          foreground: "var(--secondary-foreground)", // Secondary foreground color
        },
        muted: {
          DEFAULT: "var(--muted)", // Default muted color
          foreground: "var(--muted-foreground)", // Muted foreground color
        },
        accent: {
          DEFAULT: "var(--accent)", // Default accent color
          foreground: "var(--accent-foreground)", // Accent foreground color
        },
        destructive: {
          DEFAULT: "var(--destructive)", // Default destructive color
          foreground: "var(--destructive-foreground)", // Destructive foreground color
        },
        border: "var(--border)", // Border color
        input: "var(--input)", // Input color
        ring: "var(--ring)", // Ring color
        chart: {
          1: "var(--chart-1)", // Chart color 1
          2: "var(--chart-2)", // Chart color 2
          3: "var(--chart-3)", // Chart color 3
          4: "var(--chart-4)", // Chart color 4
          5: "var(--chart-5)", // Chart color 5
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Tailwind CSS animate plugin
};
