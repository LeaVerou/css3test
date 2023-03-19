export default {
	title: 'CSS Values and Units Module Level 3',
	links: {
		tr: 'css-values-3',
		dev: 'css-values-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	values: {
		rem: {
			links: {
				tr: '#rem',
				dev: '#rem',
				mdn: 'length',
			},
			properties: ['width', 'padding'],
			tests: '5rem',
		},
		ch: {
			links: {
				tr: '#ch',
				dev: '#ch',
				mdn: 'length',
			},
			properties: ['width', 'padding'],
			tests: '5ch',
		},
		vw: {
			links: {
				tr: '#vw',
				dev: '#vw',
				mdn: 'length',
			},
			properties: ['width', 'padding'],
			tests: '5vw',
		},
		vh: {
			links: {
				tr: '#vh',
				dev: '#vh',
				mdn: 'length',
			},
			properties: ['width', 'padding'],
			tests: '5vh',
		},
		vmin: {
			links: {
				tr: '#vmin',
				dev: '#vmin',
				mdn: 'length',
			},
			properties: ['width', 'padding'],
			tests: '5vmin',
		},
		vmax: {
			links: {
				tr: '#vmax',
				dev: '#vmax',
				mdn: 'length',
			},
			properties: ['width', 'padding'],
			tests: '5vmax',
		},
		Q: {
			links: {
				tr: '#Q',
				dev: '#Q',
				mdn: 'length',
			},
			properties: ['width', 'padding'],
			tests: '5Q',
		},
		'calc()': {
			links: {
				tr: '#calc-notation',
				dev: '#calc-notation',
			},
			properties: ['width', 'padding'],
			tests: [
				'calc(1px + 2px)',
				'calc(5px*2)',
				'calc(5px/2)',
				'calc(100%/3 - 2*1em - 2*1px)',
				'calc(5px - 10px)',
				'calc(1vw - 1px)',
				'calc(calc(100%))',
			],
		},
		'nested calc()': {
			links: {
				tr: '#calc-notation',
				dev: '#calc-notation',
			},
			properties: ['transform'],
			tests: ['translateX(calc(1px + 2px))'],
		}
	},
};
