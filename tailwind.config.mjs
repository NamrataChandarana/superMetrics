/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  geist: ['Geist', 'serif'],
		  geistMono: ['Geist Mono', 'serif'],
		},
		backgroundImage: {
		  'main-gradient': 'linear-gradient(180deg, #DCEFFF 0%, #F7FAFC 50%, #FFFFFF 100%)',
		  'second-main-gradient': 'linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 33.41%)',
		  'text-gradient': 'linear-gradient(180deg, rgba(207, 213, 222, 0.5) 0%, rgba(207, 213, 222, 0) 81.77%)',
		  'large-text-gradient': 'linear-gradient(0deg, #838E9E, #838E9E), linear-gradient(180deg, rgba(207, 213, 222, 0) -3.1%, #CFD5DE 76.12%)',
		  'head-text-gradient': 'linear-gradient(180deg, #0D314F 0%, #165182 100%)',
		  'head-box-gradient': "linear-gradient(180deg, #E9ECF0 0%, rgba(233, 236, 240, 0) 67.88%)"
		},
		colors: {
		  'nav-text': '#42526B',
		  'darkBlue': '#212F40',
		  'primary-btn-blue': '#1B91F0',
		  lighterBlue: '#697586',
		  lightBlue: '#344054',
		  darkerBlue: '#121B26',
		  'border-purple': '#7F56D9',
		  'border-yellow': '#F6B51E',
		  'border-blue': '#1B91F0',
		  'border-pink': '#F17878',
		  lightGray: '#838E9E',
		  'border-lighterBlue': '#1C0B451A',
		},
		dropShadow: {
		  'btn-outer-dropShadow': '0px 1px 2px 0px #1018280D',
		  'btn-inner-dropShadow': '0px 2px 2px 0px #FFFFFF40, inset 0px 0px 4px 0px #FFFFFF99',
		},
		padding: {
		  'page-padding': '5rem',
		},
	  },
	},
	plugins: [],
  };
  