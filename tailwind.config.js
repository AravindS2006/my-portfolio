/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'light-bg': '#ffffff',
        'light-surface': '#f8fafc',
        'light-card': '#ffffff',
        'light-border': '#e2e8f0',
        'brand-indigo': '#4f46e5',
        'brand-blue': '#2563eb',
        'brand-cyan': '#0284c7',
        'brand-emerald': '#059669',
        'brand-purple': '#7c3aed',
        'text-main': '#0f172a',
        'text-muted': '#64748b',
        'text-subtle': '#94a3b8',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.1), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
        'dock': '0 20px 40px -15px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(226, 232, 240, 0.8)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      }
    },
  },
  plugins: [],
};
