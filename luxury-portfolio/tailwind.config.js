/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#2563eb",
        "primary-light": "#3b82f6",
        "primary-dark": "#1d4ed8",
        surface: "rgba(255, 255, 255, 0.03)",
        "surface-light": "rgba(255, 255, 255, 0.06)",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        "text-primary": "rgba(255, 255, 255, 0.95)",
        "text-secondary": "rgba(255, 255, 255, 0.6)",
        "text-muted": "rgba(255, 255, 255, 0.4)",
      },
      backdropBlur: {
        glass: "20px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "fade-in-up-delay-1": "fadeInUp 0.8s ease 0.1s forwards",
        "fade-in-up-delay-2": "fadeInUp 0.8s ease 0.2s forwards",
        "fade-in-up-delay-3": "fadeInUp 0.8s ease 0.3s forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
