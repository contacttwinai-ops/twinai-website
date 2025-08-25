/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                qyneroBlue: '#1976d2',
                qyneroGreen: '#43a047',
            },
        },
    },
    plugins: [],
}
