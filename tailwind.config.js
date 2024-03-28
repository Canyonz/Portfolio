/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "var(--primary)",
			secondary: "var(--secondary)",
			secondaryHover: "var(--secondary-hover)",
			bg: "var(--bg)",
			bgSecondary: "var(--bg-secondary)",
			title: "var(--title)",
			btnBg: "var(--btn-bg)",
			btnBgHover: "var(--btn-bg-hover)",
			btnText: "var(--btn-text)",
			border: "var(--border)",
			bgOverlay: "var(--bg-overlay)",
		},
		extend: {},
	},
	plugins: [],
};
