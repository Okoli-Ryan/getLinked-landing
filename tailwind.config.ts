import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				darkPrimary: "#150E28",
				pink: "#FF26B9",
				primary: "#D434FE",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				primarybg: "linear-gradient(to right, #903AFF, #D434FE, #FF26B9, #FE34B9)",
				secondaryBg: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
			},
			fontFamily: {
				sans: ["var(--font-clash)"],
				mono: ["var(--font-montserrat)"],
				clash: ["var(--font-clash)"],
				montserrat: ["var(--font-montserrat)"],
			},
		},
	},
	plugins: [],
};
export default config;
