/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Ubuntu', 'sans-serif'],
            },
            screens: {
                '-5xl': { max: '6535px' },
                '-4xl': { max: '4535px' },
                '-3xl': { max: '3535px' },
                '-2xl': { max: '2535px' },
                '-xl': { max: '1679px' },
                '-lg': { max: '1023px' },
                '-md': { max: '767px' },
                '-sm': { max: '575px' },
                '-xs': { max: '475px' },
            },
        },
    },
    plugins: [],
}
