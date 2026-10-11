/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Fonte padrão do site (textos corridos)
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Títulos e cabeçalhos — cara de engenharia
        heading: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        // Código, tabelas, valores numéricos
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
