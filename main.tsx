@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');
@import 'tailwindcss';

@theme {
  --font-display: 'Lora', Georgia, serif;
  --font-sans: 'Outfit', system-ui, sans-serif;

  --color-cream: #f5f0e8;
  --color-parchment: #ede6d6;
  --color-forest: #2d4a3e;
  --color-forest-light: #3d6355;
  --color-terra: #c0622a;
  --color-terra-light: #d4784a;
  --color-charcoal: #1c1f1e;
  --color-stone: #6b6b5e;
  --color-mist: #a8b5ae;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #f5f0e8;
  color: #1c1f1e;
  font-family: 'Outfit', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Hide scrollbar while keeping scroll */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #a8b5ae; border-radius: 3px; opacity: 0; }
:hover::-webkit-scrollbar-thumb { opacity: 1; }
