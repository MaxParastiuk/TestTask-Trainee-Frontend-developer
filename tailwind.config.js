/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "380px",
			md: "800px",
			xl: "1000px",
		},
		extend: {
			listStyleType: {
				square: "square",
				roman: "upper-roman",
			},
			textColor: {
				bluetext: "#3A4562",
			},
		},
	},
	plugins: [],
};
