import type { Config } from "tailwindcss";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px",
      },
    },
    fontSize: {
      'xl-h1': '48px',
      'xl-h2': '46px',
      'xl-h3': '32px',
      'xl-h4': '28px',
      'xl-h5': '26px',
      'xl-h6': '18px',
      'lg-h1': '36px',
      'lg-h2': '32px',
      'lg-h3': '28px',
      'lg-h4': '24px',
      'lg-h5': '20px',
      'lg-h6': '16px',
      'md-h1': '30px',
      'md-h2': '28px',
      'md-h3': '22px',
      'md-h4': '20px',
      'md-h5': '18px',
      'md-h6': '16px',
      '18': '18px',
      '16': '16px',
      '14': '14px',
      '12': '12px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'banner1': "url('/assets/images/banner1.jpeg')",
        'abouthead': "url('/assets/images/abouthead.jpg')",
        'ceohead': "url('/assets/images/ceohead.jpg')",
        'ceo': "url('/assets/images/ceo.jpg')",
        'contacthead': "url('/assets/images/contacthead.jpg')",
        'servicehead': "url('/assets/images/servicehead.jpg')",
        'privacyhead': "url('/assets/images/privacyhead.jpg')",
        'termshead': "url('/assets/images/termshead.jpg')",
      },
      colors: {
        
        primary: {
          orange: {
            500: "#ea580c",
            400: "#f97316",
            300: "#fb923c",
            200: "#fdba74",
            100: "#fed7aa",
          },
        }
      }
    }
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
