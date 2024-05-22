const tailwindConfig = {
  content: ['**/*.{js,jsx,ts,tsx}'],
  plugins: [
    require('daisyui'),
    require('nativewind/tailwind/css')
  ],
  daisyui: {
    themes: [
      "aqua",
      "night"
    ]
  }
}
export default tailwindConfig
