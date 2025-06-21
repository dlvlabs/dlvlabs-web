import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
