/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-hero": "url('./assets/bg-hero.webp')",
        "custom-bg-two": "url('./assets/bg-two.webp')",
        "custom-seta-button-double":
          "url('./assets/duas-setas-pretas-lado-direito.svg')",
        "custom-seta-button-one":
          "url('./assets/uma-seta-preta-lado-direito.svg')",
      },
    },
  },
  plugins: [],
};
