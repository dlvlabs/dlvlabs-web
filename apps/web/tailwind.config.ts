import type { Config } from "tailwindcss";

import base from "@dlvlabs/tailwind-config";

export default {
  ...base,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...base.theme,
    extend: {
      ...base.theme?.extend,
    },
  },
} satisfies Config;
