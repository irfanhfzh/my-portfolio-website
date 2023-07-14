/** @type {import('tailwindcss').Config} */
import { withAnimations } from "animated-tailwindcss";

export default withAnimations({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				signika: ["Signika", "sans-serif"],
				"istok-web": ["Istok Web", "sans-serif"],
				imprima: ["Imprima", "sans-serif"],
			},
			screens: {
				tablet: "576px",
			},
			colors: {
				primary: "#DDA15E",
				secondary: "#606C38",
				black: "#0D0D0D",
				white: "#FDFDFD",
			},
		},
	},
	plugins: [],
});
