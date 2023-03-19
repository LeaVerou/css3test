export default {
	title: 'CSS Easing Functions Level 2',
	links: {
		tr: 'css-easing-2',
		dev: 'css-easing-2',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		"linear()": {
			links: {
				dev: '#the-linear-easing-function',
				mdn: 'easing-function#linear_easing_function',
			},
			properties: ['transition-timing-function'],
			tests: ['linear(0, 0.25, 0.5, 0.75, 1)', 'linear(0, 0.25 50%, 0.5 75%, 0.75 90%, 1)'],
		},
	},
};
