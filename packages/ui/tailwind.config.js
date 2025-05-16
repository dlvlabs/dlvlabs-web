/** @type {import('tailwindcss').Config} */
import sharedConfig from "@dlvlabs/tailwind-config";

export default {
  ...sharedConfig,
  content: [...sharedConfig.content, "./src/**/*.{js,ts,jsx,tsx}"],
};
