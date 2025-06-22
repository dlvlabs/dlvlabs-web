import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        status: {
          active: {
            DEFAULT: "#23c55e",
            light: "#34d399",
            dark: "#10b981",
            glow: "rgba(35, 197, 94, 0.6)",
          },
          warning: {
            DEFAULT: "#eab308",
            light: "#fbbf24",
            dark: "#f59e0b",
            orange: "#f97316",
            glow: "rgba(234, 179, 8, 0.6)",
          },
          error: {
            DEFAULT: "#ef4444",
            light: "#fb7185",
            dark: "#f43f5e",
            darker: "#dc2626",
            glow: "rgba(239, 68, 68, 0.6)",
          },
        },
      },
      animation: {
        "slow-ping": "slow-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "slow-ping": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.8",
          },
          "75%, 100%": {
            transform: "scale(2.5)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
