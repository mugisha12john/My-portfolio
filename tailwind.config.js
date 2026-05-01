/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#7fee64',
          dim: '#4aaa38',
        },
        bg: {
          DEFAULT: '#0a0a0a',
          2: '#0f0f0f',
          3: '#141414',
          4: '#1a1a1a',
        },
        border: {
          DEFAULT: 'rgba(127, 238, 100, 0.12)',
          bright: 'rgba(127, 238, 100, 0.3)',
        },
        text: {
          DEFAULT: '#ffffff',
          dim: 'rgba(255, 255, 255, 0.55)',
          muted: 'rgba(255, 255, 255, 0.28)',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Namdhinggo', 'serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(127, 238, 100, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(127, 238, 100, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'rotate': 'rotate 30s linear infinite',
        'rotate-reverse': 'rotate 50s linear infinite reverse',
        'rotate-slow': 'rotate 70s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'pulse': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        rotate: {
          from: { transform: 'translateY(-50%) rotate(0deg)' },
          to: { transform: 'translateY(-50%) rotate(360deg)' },
        },
        fadeUp: {
          from: { 
            opacity: '0',
            transform: 'translateY(24px)',
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(127, 238, 100, 0.4)',
          },
          '50%': {
            opacity: '0.7',
            boxShadow: '0 0 0 6px rgba(127, 238, 100, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}
