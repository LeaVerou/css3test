export default {
	title: 'CSS Transforms Module Level 1',
	links: {
		tr: 'css-transforms-1',
		dev: 'css-transforms-1',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2017,
	},
	properties: {
		transform: {
			links: {
				tr: '#transform-property',
				dev: '#transform-property',
			},
			tests: [
				'none',
				'translate(5px)',
				'translate(5px, 10px)',
				'translateY(5px)',
				'translateX(5px)',
				'translateY(5%)',
				'translateX(5%)',
				'scale(2)',
				'scale(2, -1)',
				'scaleX(2)',
				'scaleY(2.5)',
				'rotate(45deg)',
				'skew(45deg)',
				'skew(45deg, 15deg)',
				'skewX(45deg)',
				'skewY(45deg)',
				'matrix(1,-.2,0,1,0,0)',
				'matrix(1,-.2,0,1,10,10)',
				'translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)',
				'translateZ(5px)',
				'scaleZ(1.5)',
				'rotateX(-45deg)',
				'rotateY(-45deg)',
				'rotateZ(-45deg)',
				'perspective(600px)',
			],
		},
		'transform-origin': {
			links: {
				tr: '#transform-origin-property',
				dev: '#transform-origin-property',
			},
			tests: ['10px', 'top', 'top left', '50% 100%', 'left 0%', 'left 50% 0'],
		},
		'transform-box': {
			links: {
				tr: '#transform-box',
				dev: '#transform-box',
			},
			tests: ['border-box', 'fill-box', 'view-box'],
		},
	},
};
