export default {
	title: 'CSS Anchor Positioning',
	links: {
		tr: 'css-anchor-position-1',
		dev: 'css-anchor-position-1',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		'anchor()': {
			links: {
				tr: '#anchor-pos',
				dev: '#anchor-pos',
			},
			properties: [
				'top',
				'right',
				'bottom',
				'left',
				'inset-block-start',
				'inset-block-end',
				'inset-inline-start',
				'inset-inline-end',
				'inset-block',
				'inset-inline',
				'inset',
			],
			tests: [
				'anchor(inside)',
				'anchor(outside)',
				'anchor(inside, 20px)',
				'anchor(outside, 30%)',
				'anchor(--anchor inside)',
				'anchor(--anchor outside)',
				'anchor(--anchor inside, 20px)',
				'anchor(--anchor outside, 30%)',
				'anchor(top)',
				'anchor(left)',
				'anchor(right)',
				'anchor(bottom)',
				'anchor(start)',
				'anchor(end)',
				'anchor(self-start)',
				'anchor(self-end)',
				'anchor(center)',
				'anchor(30%)',
				'anchor(top, 20px)',
				'anchor(start, 30%)',
				'anchor(30%, 20px)',
				'anchor(--anchor top)',
				'anchor(--anchor top, 20px)',
				'anchor(--anchor top, 5%)',
				'anchor(auto top)',
				'anchor(auto top, 20px)',
				'anchor(auto top, 5%)',
			],
		},
		'anchor-center': {
			links: {
				dev: '#anchor-center',
			},
			properties: [
				'justify-self',
				'align-self',
				'justify-items',
				'align-items',
				'place-self',
				'place-items',
			],
			tests: [
				'anchor-center',
			],
		},
		'anchor-size()': {
			links: {
				tr: '#anchor-size-fn',
				dev: '#anchor-size-fn',
			},
			properties: [
				'width',
				'height',
				'min-width',
				'min-height',
				'max-width',
				'max-height',
			],
			tests: [
				'anchor-size(width)',
				'anchor-size(height)',
				'anchor-size(block)',
				'anchor-size(inline)',
				'anchor-size(self-block)',
				'anchor-size(self-inline)',
				'anchor-size(width, 20px)',
				'anchor-size(height, 5%)',
				'anchor-size(--anchor width)',
				'anchor-size(--anchor width, 20px)',
				'anchor-size(--anchor height, 5%)',
				'anchor-size(--anchor block)',
				'anchor-size(--anchor inline)',
				'anchor-size(--anchor block, 20px)',
				'anchor-size(--anchor inline, 5%)',
				'anchor-size(--anchor self-block)',
				'anchor-size(--anchor self-inline)',
				'anchor-size(--anchor self-block, 20px)',
				'anchor-size(--anchor self-inline, 5%)',
			],
		},
	},
	properties: {
		'anchor-name': {
			links: {
				tr: '#name',
				dev: '#name',
			},
			tests: ['none', '--anchor', '--first-anchor, --second-anchor'],
		},
		'anchor-scope': {
			links: {
				tr: '#anchor-scope',
				dev: '#anchor-scope',
			},
			tests: [
				'none',
				'all',
				'--anchor',
				'--first-anchor, --second-anchor',
			],
		},
		'inset-area': {
			links: {
				dev: '#inset-area',
			},
			tests: [
				'left',
				'center',
				'right',
				'span-left',
				'span-right',
				'x-start',
				'x-end',
				'span-x-start',
				'span-x-end',
				'x-self-start',
				'x-self-end',
				'span-x-self-start',
				'span-x-self-end',
				'span-all',
				'top',
				'bottom',
				'span-top',
				'span-bottom',
				'y-start',
				'y-end',
				'span-y-start',
				'span-y-end',
				'y-self-start',
				'y-self-end',
				'span-y-self-start',
				'span-y-self-end',
				'left top',
				'center span-top',
				'span-all span-all',
				'block-start',
				'block-end',
				'span-block-start',
				'span-block-end',
				'inline-start',
				'inline-end',
				'span-inline-start',
				'span-inline-end',
				'block-start inline-end',
				'span-block-start span-inline-end',
				'self-block-start',
				'self-block-end',
				'span-self-block-start',
				'span-self-block-end',
				'self-inline-start',
				'self-inline-end',
				'span-self-inline-start',
				'span-self-inline-end',
				'self-block-start self-inline-end',
				'span-self-inline-start self-block-end',
				'start',
				'end',
				'span-start',
				'span-end',
				'start start',
				'center span-end',
				'self-start',
				'self-end',
				'span-self-start',
				'span-self-end',
				'self-start self-end',
				'span-self-start span-self-end',
			],
		},
		// The old name is anchor-default
		'position-anchor': {
			links: {
				tr: '#position-anchor',
				dev: '#position-anchor',
			},
			tests: [
				'auto', // the old name is implicit, https://github.com/w3c/csswg-drafts/issues/10312#issuecomment-2112984254
				'--fallback'
			],
		},
		'position-try': {
			links: {
				tr: '#position-try-prop',
				dev: '#position-try-prop',
			},
			tests: [
				'none',
				'--try-position',
				'flip-block',
				'flip-inline',
				'flip-start',
				'--try-position flip-block',
				'--try-position flip-inline',
				'--try-position flip-start',
				'inset-area(left)',
				'inset-area(center)',
				'inset-area(right)',
				'inset-area(span-left)',
				'inset-area(span-right)',
				'inset-area(x-start)',
				'inset-area(x-end)',
				'inset-area(span-x-start)',
				'inset-area(span-x-end)',
				'inset-area(x-self-start)',
				'inset-area(x-self-end)',
				'inset-area(span-x-self-start)',
				'inset-area(span-x-self-end)',
				'inset-area(span-all)',
				'inset-area(top)',
				'inset-area(bottom)',
				'inset-area(span-top)',
				'inset-area(span-bottom)',
				'inset-area(y-start)',
				'inset-area(y-end)',
				'inset-area(span-y-start)',
				'inset-area(span-y-end)',
				'inset-area(y-self-start)',
				'inset-area(y-self-end)',
				'inset-area(span-y-self-start)',
				'inset-area(span-y-self-end)',
				'inset-area(left top)',
				'inset-area(center span-top)',
				'inset-area(span-all span-all)',
				'inset-area(block-start)',
				'inset-area(block-end)',
				'inset-area(span-block-start)',
				'inset-area(span-block-end)',
				'inset-area(inline-start)',
				'inset-area(inline-end)',
				'inset-area(span-inline-start)',
				'inset-area(span-inline-end)',
				'inset-area(block-start inline-end)',
				'inset-area(span-block-start span-inline-end)',
				'inset-area(self-block-start)',
				'inset-area(self-block-end)',
				'inset-area(span-self-block-start)',
				'inset-area(span-self-block-end)',
				'inset-area(self-inline-start)',
				'inset-area(self-inline-end)',
				'inset-area(span-self-inline-start)',
				'inset-area(span-self-inline-end)',
				'inset-area(self-block-start self-inline-end)',
				'inset-area(span-self-inline-start self-block-end)',
				'inset-area(start)',
				'inset-area(end)',
				'inset-area(span-start)',
				'inset-area(span-end)',
				'inset-area(start start)',
				'inset-area(center span-end)',
				'inset-area(self-start)',
				'inset-area(self-end)',
				'inset-area(span-self-start)',
				'inset-area(span-self-end)',
				'inset-area(self-start self-end)',
				'inset-area(span-self-start span-self-end)',
				'flip-block, --try-position',
				'flip-inline, --try-position flip-block',
				'--try-position, inset-area(block-start)',
				'normal --try-position',
				'most-width flip-block',
				'most-height inset-area(left)',
				'most-block-size flip-block, --try-position',
				'most-inline-size inset-area(block-start), --try-position flip-inline',
			],
		},
		'position-try-options': {
			links: {
				tr: '#position-try-options',
				dev: '#position-try-options',
			},
			tests: [
				'none',
				'--try-position',
				'flip-block',
				'flip-inline',
				'flip-start',
				'--try-position flip-block',
				'--try-position flip-inline',
				'--try-position flip-start',
				'inset-area(left)',
				'inset-area(center)',
				'inset-area(right)',
				'inset-area(span-left)',
				'inset-area(span-right)',
				'inset-area(x-start)',
				'inset-area(x-end)',
				'inset-area(span-x-start)',
				'inset-area(span-x-end)',
				'inset-area(x-self-start)',
				'inset-area(x-self-end)',
				'inset-area(span-x-self-start)',
				'inset-area(span-x-self-end)',
				'inset-area(span-all)',
				'inset-area(top)',
				'inset-area(bottom)',
				'inset-area(span-top)',
				'inset-area(span-bottom)',
				'inset-area(y-start)',
				'inset-area(y-end)',
				'inset-area(span-y-start)',
				'inset-area(span-y-end)',
				'inset-area(y-self-start)',
				'inset-area(y-self-end)',
				'inset-area(span-y-self-start)',
				'inset-area(span-y-self-end)',
				'inset-area(left top)',
				'inset-area(center span-top)',
				'inset-area(span-all span-all)',
				'inset-area(block-start)',
				'inset-area(block-end)',
				'inset-area(span-block-start)',
				'inset-area(span-block-end)',
				'inset-area(inline-start)',
				'inset-area(inline-end)',
				'inset-area(span-inline-start)',
				'inset-area(span-inline-end)',
				'inset-area(block-start inline-end)',
				'inset-area(span-block-start span-inline-end)',
				'inset-area(self-block-start)',
				'inset-area(self-block-end)',
				'inset-area(span-self-block-start)',
				'inset-area(span-self-block-end)',
				'inset-area(self-inline-start)',
				'inset-area(self-inline-end)',
				'inset-area(span-self-inline-start)',
				'inset-area(span-self-inline-end)',
				'inset-area(self-block-start self-inline-end)',
				'inset-area(span-self-inline-start self-block-end)',
				'inset-area(start)',
				'inset-area(end)',
				'inset-area(span-start)',
				'inset-area(span-end)',
				'inset-area(start start)',
				'inset-area(center span-end)',
				'inset-area(self-start)',
				'inset-area(self-end)',
				'inset-area(span-self-start)',
				'inset-area(span-self-end)',
				'inset-area(self-start self-end)',
				'inset-area(span-self-start span-self-end)',
				'flip-block, --try-position',
				'flip-inline, --try-position flip-block',
				'--try-position, inset-area(block-start)',
			],
		},
		'position-try-order': {
			links: {
				tr: '#position-try-order-property',
				dev: '#position-try-order-property',
			},
			tests: [
				'normal',
				'most-width',
				'most-height',
				'most-block-size',
				'most-inline-size',
			],
		},
		'position-visibility': {
			links: {
				tr: '#position-visibility',
				dev: '#position-visibility',
			},
			tests: [
				'always',
				'anchors-valid',
				'anchors-visible',
				'no-overflow',
				'anchors-valid anchors-visible',
				'anchors-valid no-overflow',
				'anchors-visible no-overflow',
				'anchors-valid anchors-visible no-overflow',
			],
		},
	},
	'@rules': {
		'@position-try': {
			links: {
				tr: '#fallback-rule',
				dev: '#fallback-rule',
			},
			tests: [
				"@position-try --button-popover {\n  top: anchor(--button bottom);\n  left: anchor(--button left);\n}",
				"@position-try --button-popover {\n  bottom: anchor(--button top);\n  right: anchor(--button right);\n  margin: 1em;\n}",
				"@position-try --position-try {\n  inset-area: top left;\n}",
			],
		},
	},
	interfaces: {
		CSSPositionTryRule: {
			links: {
				dev: '#om-position-try',
				mdnGroup: 'DOM',
			},
			tests: ['name', 'style', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@position-try --button-popover {\n  top: anchor(--button bottom);\n  left: anchor(--button left);\n}',
			interface: function(style) {
				return style.sheet.cssRules[0].cssRules[0];
			}
		},
	},
};
