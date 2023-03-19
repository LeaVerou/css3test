export default {
	title: 'CSS Cascading and Inheritance Level 3',
	links: {
		tr: 'css-cascade-3',
		dev: 'css-cascade-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
		'last-snapshot': 2018,
	},
	values: {
		unset: {
			links: {
				tr: '#inherit-initial',
				dev: '#inherit-initial',
			},
			properties: ['color', 'font-weight', 'background-image', 'width'],
			tests: 'unset',
		},
	},
	properties: {
		all: {
			links: {
				tr: '#all-shorthand',
				dev: '#all-shorthand',
			},
			tests: ['initial', 'unset'],
		},
	},
};
