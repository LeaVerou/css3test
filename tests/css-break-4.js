export default {
	title: 'CSS Fragmentation Module Level 4',
	links: {
		tr: 'css-break-4',
		dev: 'css-break-4',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		always: {
			links: {
				tr: '#valdef-break-before-always',
				dev: '#valdef-break-before-always',
				mdn: 'break-before#values',
			},
			properties: ['break-before', 'break-after'],
			tests: 'always',
		},
		all: {
			links: {
				tr: '#valdef-break-before-all',
				dev: '#valdef-break-before-all',
				mdn: 'break-before#values',
			},
			properties: ['break-before', 'break-after'],
			tests: 'all',
		},
	},
	properties: {
		'margin-break': {
			links: {
				tr: '#break-margins',
				dev: '#break-margins',
			},
			tests: ['auto', 'keep', 'discard'],
		},
	},
};
