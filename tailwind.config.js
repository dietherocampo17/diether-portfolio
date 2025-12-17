/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#0f172a",
                card: "rgba(30, 41, 59, 0.7)",
                accent: "#38bdf8",
                secondary: "#94a3b8",
            },
            fontFamily: {
                mono: ['"Fira Code"', 'monospace'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [],
}
