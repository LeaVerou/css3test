export default {
	title: 'CSS Color Module Level 3',
	links: {
		tr: 'css-color-3',
		dev: 'css-color-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2007,
		'last-snapshot': 2021,
	},
	values: {
		rgba: {
			links: {
				tr: '#rgba-color',
				dev: '#rgba-color',
				mdn: 'color_value/rgba()',
			},
			properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
			tests: 'rgba(0,0,0,.5)',
		},
		hsl: {
			links: {
				tr: '#hsl-color',
				dev: '#hsl-color',
				mdn: 'color_value/hsl()',
			},
			properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
			tests: 'hsl(0,0%,0%)',
		},
		hsla: {
			links: {
				tr: '#hsla-color',
				dev: '#hsla-color',
				mdn: 'color_value/hsla()',
			},
			properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
			tests: 'hsl(0,0%,0%,.5)',
		},
		currentColor: {
			links: {
				tr: '#currentcolor',
				dev: '#currentcolor',
				mdn: 'color_value',
			},
			properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
			tests: 'currentColor',
		},
		transparent: {
			links: {
				tr: '#transparent',
				dev: '#transparent',
				mdn: 'color_value',
			},
			properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
			tests: 'transparent',
		},
	},
	properties: {
		opacity: {
			links: {
				tr: '#transparency',
				dev: '#transparency',
			},
			tests: ['-5', '0', '.5', '1', '2'],
		},
	},
};
