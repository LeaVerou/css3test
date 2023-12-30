export default {
	title: 'CSS Color Module Level 5',
	links: {
		dev: 'css-color-5',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		'color-mix()': {
			links: {
				dev: '#color-mix',
				mdn: 'color_value/color-mix',
			},
			tests: [
				'color-mix(in srgb, teal 65%, olive)',
				'color-mix(in srgb, rgb(255, 0, 0, .2) 65%, olive)',
				'color-mix(in srgb, currentColor, rgba(0, 0, 0, .5) 65%',
				'color-mix(in srgb, currentColor 10%, rgba(0, 0, 0, .5) 65%',
				'color-mix(in lch, teal 65%, olive)',
				'color-mix(in hsl, teal 65%, olive)',
				'color-mix(in hwb, teal 65%, olive)',
				'color-mix(in xyz, teal 65%, olive)',
				'color-mix(in lab, teal 65%, olive)',
			],
		},
		'color-adjust()': {
			links: {
				dev: '#coloradjust',
				mdn: 'color_value',
			},
			tests: ['color-adjust(peru lightness -20%)'],
		},

		'relative color': {
			links: {
				dev: '#relative-colors',
				mdn: 'color_value',
			},
			tests: [
				'rgb(from indianred 255 g b)',
				'hsl(from lightseagreen calc(h+180) s l)',
				'lab(from orchid l 0 0)',
				'lch(from peru calc(l * 0.8) c h)',
				'oklab(from oklab(54.3% -22.5% -5%) calc(1.0 - l) calc(a * 0.8) b)',
				'oklch(from oklch(52.6% 0.115 44.6deg) l c  calc(h + 90))',
				'color(from color(srgb 0 0 0 / 60%) srgb alpha 0.6 0.6 / 0.9)',
				'linear-gradient(in Oklab to right, oklch(from hsl(none 3% 50%) calc(l * 0.8) c h),   #4C3)'
			],
		},

		'light-dark()': {
			links: {
				dev: '#light-dark',
				mdn: 'light-dark',
			},
			tests: ['light-dark(green, red)'],
		},

		'device-cmyk()': {
			links: {
				tr: '#cmyk-colors',
				dev: '#cmyk-colors',
				mdn: 'color_value/device-cmyk',
			},
			tests: ['device-cmyk(.2 .3 .4 .5)', 'device-cmyk(.2 .3 .4 .5 / .5)', 'device-cmyk(.2 .3 .4 .5 / 50%)'],
		},
	},
	interfaces: {
		CSSColorProfileRule: {
			links: {
				dev: '#the-csscolorprofilerule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['name', 'src', 'renderingIntent', 'components', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@color-profile { name: "sRGB"; src: url("sRGB.icc"); }',
		},
	}
};
