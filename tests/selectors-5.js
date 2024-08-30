export default {
	title: 'Selectors Level 5',
	links: {
		dev: 'selectors-5',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		':local-link()': {
			links: {
				dev: '#local-pseudo',
			},
			tests: [
				':local-link(1)',
			],
		},
		':state()': {
			links: {
				dev: '#custom-state',
			},
			tests: [':state(stuck)'],
		},
		'Reference selector': {
			links: {
				dev: '#idref-combinators',
			},
			tests: [
				'label /for/ input',
			],
		},
	},
};
