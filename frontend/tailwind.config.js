/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: "#51CE7F",
				primary: "#040E1B",
				thirtiary: "#334155",
				secondary: "#F1F1F8",
				alert: "#F64740",
			},
			keyframes: {
				dash: {
					"0%": { width: "0px", opacity: 0 },
					"25%": { width: "10px", opacity: 0.5 },
					"50%": { width: "18px", opacity: 1 },
					"75%": { width: "16x", opacity: 1 },
					"100%": { width: "14px", opacity: 1 },
				},
			},
			animation: {
				dash: "dash 0.4s ease-in",
			},
		},
	},
	plugins: [],
};
