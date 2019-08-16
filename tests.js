window.Specs = {
	"css3-background": {
		"title": "Backgrounds and Borders Level 3",
		"links": {
			"tr": "css-backgrounds-3",
			"dev": "css-backgrounds"
		},
		"properties": {
			"background-repeat": ["space", "round"].concat(["repeat", "space", "round", "no-repeat"].times(2)),
			"background-attachment": "local",
			"background-position": ["bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"background-clip": ["border-box", "padding-box", "content-box"],
			"background-origin": ["border-box", "padding-box", "content-box"],
			"background-size": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"background": [
				"url(foo.png), url(bar.svg)",
				"top left / 50% 60%",
				"border-box",
				"border-box padding-box",
				"url(foo.png) bottom right / cover padding-box content-box"
			],
			"border-top-left-radius": ["0", "50%", "250px 100px"],
			"border-top-right-radius": ["0", "50%", "250px 100px"],
			"border-bottom-right-radius": ["0", "50%", "250px 100px"],
			"border-bottom-left-radius": ["0", "50%", "250px 100px"],
			"border-radius": ["10px", "50%", "10px / 20px", "2px 4px 8px 16px", "2px 4px 8px 16px / 2px 4px 8px 16px"],
			"border-image-source": ["none", "url(foo.png)"],
			"border-image-slice": ["10", "30%"].times(1, 4).concat(["fill 30%", "fill 10", "fill 2 4 8% 16%", "30% fill", "10 fill", "2 4 8% 16% fill"]),
			"border-image-width": ["10px", "5%", "28", "auto", "10px 10px", "5% 10px", "28 10px", "auto 10px", "10px 5%", "5% 5%", "28 5%", "auto 5%", "10px 28", "5% 28", "28 28", "auto 28", "10px auto", "5% auto", "28 auto", "auto auto", "10px 10% 10", "5% 10px 20 auto"],
			"border-image-outset": ["10px", "20", "10px 20", "10px 20px", "20 30", "2px 3px 4", "1 2px 3px 4"],
			"border-image-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
			"border-image": [
				"url(foo.png) 10", "url(foo.png) 10%", "url(foo.png) 10% fill",
				"url(foo.png) 10 round", "url(foo.png) 10 stretch repeat",
				"url(foo.png) 10 / 10px", "url(foo.png) 10 / 10% / 10px",
				"url(foo.png) fill 10 / 10% / 10px", "url(foo.png) fill 10 / 10% / 10px space"
			],
			"box-shadow": [
				"1px 1px", "0 0 black", "1px 2px 3px black", "1px 2px 3px 4px black",
				"inset 1px 1px", "1px 2px 3px 4px black inset"
			]
		}
	},

	"css-backgrounds-4": {
		"title": "Backgrounds and Borders Level 4",
		"links": {
			"dev": "css-backgrounds-4",
		},
		"properties": {
			"background-position-x": ["right", "center", "50%", "left, left", "left, right", "right, left", "left, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "left, left, left, left, left", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)", "right 20px", "left 20px", "right -50px", "left -50px", "right 20px"],
			"background-position-y": ["bottom", "center", "50%", "top, top", "top, bottom", "bottom, top", "top, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "top, top, top, top, top", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)", "bottom 20px", "top 20px", "bottom -50px", "top -50px", "bottom 20px"]
		}
	},

	"css3-images": {
		"title": "Image Values Level 3",
		"links": {
			"tr": "css3-images",
			"dev": "css-images-3"
		},
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"cursor",
				"content"
			],
			"linear-gradient()": [
				"linear-gradient(white, black)",
				"linear-gradient(to right, white, black)",
				"linear-gradient(45deg, white, black)",
				"linear-gradient(white 50%, black)",
				"linear-gradient(white 5px, black)",
				"linear-gradient(white, #f06, black)",
				"linear-gradient(currentColor, black)",
				"linear-gradient(red -50px, white calc(-25px + 50%), blue 100%)"
			],
			"radial-gradient()": [
				"radial-gradient(white, black)",
				"radial-gradient(circle, white, black)",
				"radial-gradient(ellipse, white, black)",
				"radial-gradient(closest-corner, white, black)",
				"radial-gradient(circle closest-corner, white, black)",
				"radial-gradient(farthest-side, white, black)",
				"radial-gradient(circle farthest-side, white, black)",
				"radial-gradient(50%, white, black)",
				"radial-gradient(60% 60%, white, black)"/*,
				"radial-gradient(at 60% 60%, white, black)",
				"radial-gradient(30% 30% at 20% 20%, white, black)",
				"radial-gradient(5em circle at top left, yellow, blue)",
				"radial-gradient(circle farthest-side at top left, white, black)"*/
			],
			"repeating-linear-gradient()": "repeating-linear-gradient(white, black)",
			"repeating-radial-gradient()": "repeating-radial-gradient(white, black)",
		},
		"properties": {
			"object-fit": ["fill", "contain", "cover", "none", "scale-down"],
			"object-position": ["50% 50%", "center", "top right", "bottom 10px right 20px"],
			"image-orientation": ["from-image", "0deg", "90deg", "45deg", "45deg flip", "1turn", "100grad", "2rad"],
			"image-rendering": ["auto", "smooth", "high-quality", "crisp-edges", "pixelated"],
		}
	},

	"css-images-4": {
		"title": "Image Values Level 4",
		"links": {
			"tr": "css-images-4",
			"dev": "css-images-4"
		},
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"cursor",
				"content"
			],
			"linear-gradient()": [
				"linear-gradient(45deg, #f06 25%, yellow 25% 50%, #f06 50% 75%, yellow 75%)"
			],
			"radial-gradient()": [
				"radial-gradient(center, red 0% 25%, blue 25% 75%, red 75% 100%)"
			],
			"conic-gradient()": [
				"conic-gradient(white, black)",
				"conic-gradient(from 5deg, white, black)",
				"conic-gradient(at top left, white, black)",
				"conic-gradient(white 50%, black)",
				"conic-gradient(white 5deg, black)",
				"conic-gradient(white, #f06, black)",
				"conic-gradient(currentColor, black)",
				"conic-gradient(black 25%, white 0deg 50%, black 0deg 75%, white 0deg)"
			],
			"repeating-conic-gradient()": [
				"repeating-conic-gradient(white, black)",
				"repeating-conic-gradient(hsla(0, 0%, 100%, .2) 0deg 15deg, hsla(0, 0%, 100%, 0) 0deg 30deg)"
			],
			"image()": [
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)",
				"image(green)"
			],
			"image-set()": [
				"image-set('foo.png' 1x, 'foo-2x.png' 2x, 'foo-print.png' 600dpi)"
			],
			"element()": "element(#foo)",
			"cross-fade()": [
				"cross-fade(url(a.png), url(b.png))",
				"cross-fade(url(a.png) 50%, url(b.png))",
				"cross-fade(url(a.png) 50%, white)"
			]
		},
		"properties": {
			"image-resolution": [
				"from-image", "from-image snap", "snap from-image",
				"1dppx", "1dpcm", "300dpi", "from-image 300dpi", "300dpi from-image", "300dpi from-image snap"
			]
		}
	},

	"css3-selectors": {
		"title": "Selectors Level 3",
		"links": {
			"tr": "selectors-3",
			"dev": "selectors-3"
		},
		"selectors": {
			"Sibling combinator": "foo ~ bar",
			"::before": "::before",
			"::after": "::after",
			"::first-letter": "::first-letter",
			"::first-line": "::first-line",
			"[att^=val]": ["[att^=val]", "[att^=\"val\"]"],
			"[att*=val]": ["[att*=val]", "[att*=\"val\"]"],
			"[att$=val]": ["[att$=val]", "[att$=\"val\"]"],
			"Namespaces": ["*|html", "[*|attr]", "[*|attr=val]", "*|html[*|attr]"],
			":target": ":target",
			":enabled": ":enabled",
			":disabled": ":disabled",
			":checked": ":checked",
			":indeterminate": ":indeterminate",
			":root": ":root",
			":nth-child": [
				":nth-child(even)", ":nth-child(odd)",
				":nth-child(n)", ":nth-child(-n)", ":nth-child(0n)",
				":nth-child(1)", ":nth-child(-1)", ":nth-child(0)",
				":nth-child(n+1)", ":nth-child(3n+1)", ":nth-child(3n + 1)",
				":nth-child(-n+1)", ":nth-child(-n-1)", ":nth-child(3n-1)"
			],
			":nth-last-child": [
				":nth-last-child(even)", ":nth-last-child(odd)",
				":nth-last-child(n)", ":nth-last-child(-n)", ":nth-last-child(0n)",
				":nth-last-child(1)", ":nth-last-child(-1)", ":nth-last-child(0)",
				":nth-last-child(n+1)", ":nth-last-child(3n+1)", ":nth-last-child(3n + 1)",
				":nth-last-child(-n+1)", ":nth-last-child(-n-1)", ":nth-last-child(3n-1)"
			],
			":nth-of-type": [
				":nth-of-type(even)", ":nth-of-type(odd)",
				":nth-of-type(n)", ":nth-of-type(-n)", ":nth-of-type(0n)",
				":nth-of-type(1)", ":nth-of-type(-1)", ":nth-of-type(0)",
				":nth-of-type(n+1)", ":nth-of-type(3n+1)", ":nth-of-type(3n + 1)",
				":nth-of-type(-n+1)", ":nth-of-type(-n-1)", ":nth-of-type(3n-1)"
			],
			":nth-last-of-type": [
				":nth-last-of-type(even)", ":nth-last-of-type(odd)",
				":nth-last-of-type(n)", ":nth-last-of-type(-n)", ":nth-last-of-type(0n)",
				":nth-last-of-type(1)", ":nth-last-of-type(-1)", ":nth-last-of-type(0)",
				":nth-last-of-type(n+1)", ":nth-last-of-type(3n+1)", ":nth-last-of-type(3n + 1)",
				":nth-last-of-type(-n+1)", ":nth-last-of-type(-n-1)", ":nth-last-of-type(3n-1)"
			],
			":last-child": ":last-child",
			":only-child": ":only-child",
			":first-of-type": ":first-of-type",
			":last-of-type": ":last-of-type",
			":only-of-type": ":only-of-type",
			":empty": ":empty",
			":not()": [":not(*)", ":not(element)", ":not(.class):not(#id):not([attr]):not(:link)"],
		}
	},

	"selectors": {
		"title": "Selectors Level 4",
		"links": {
			"tr": "selectors-4",
			"dev": "selectors-4"
		},
		"selectors": {
			":indeterminate": ":indeterminate",
			":blank": ":blank",
			":placeholder-shown": ":placeholder-shown",
			":default": ":default",
			":valid": ":valid",
			":invalid": ":invalid",
			":in-range": ":in-range",
			":out-of-range": ":out-of-range",
			":required": ":required",
			":optional": ":optional",
			":read-only": ":read-only",
			":read-write": ":read-write",
			":focus-visible": ":focus-visible",
			":focus-within": ":focus-within",
			":current": ":current",
			":current()": ":current(p, li, dt, dd)",
			":past": ":past",
			":future": ":future",
			":scope": ":scope",
			":any-link": ":any-link",
			":local-link": ":local-link",
			":target-within": ":target-within",
			":lang()": [":lang(zh, \"*-hant\")"],
			":not()": [":not(em, #foo)"],
			":where()": [":where(em, #foo)", ":where(:not(:hover))"],
			":is()": [":is(em, #foo)", ":is(:not(:hover))"],
			":has()": ["a:has(> img)", "dt:has(+ dt)", "section:not(:has(h1, h2, h3, h4, h5, h6))", "section:has(:not(h1, h2, h3, h4, h5, h6))"],
			":nth-child of": [":nth-child(-n+3 of li.important)", ":nth-child(even of :not([hidden])"],
			"||": ["foo || bar"],
			":nth-col()": [
				":nth-col(even)", ":nth-col(odd)",
				":nth-col(n)", ":nth-col(-n)", ":nth-col(0n)",
				":nth-col(1)", ":nth-col(-1)", ":nth-col(0)",
				":nth-col(n+1)", ":nth-col(3n+1)", ":nth-col(3n + 1)",
				":nth-col(-n+1)", ":nth-col(-n-1)", ":nth-col(3n-1)"
			],
			":nth-last-col()": [
				":nth-last-col(even)", ":nth-last-col(odd)",
				":nth-last-col(n)", ":nth-last-col(-n)", ":nth-last-col(0n)",
				":nth-last-col(1)", ":nth-last-col(-1)", ":nth-last-col(0)",
				":nth-last-col(n+1)", ":nth-last-col(3n+1)", ":nth-last-col(3n + 1)",
				":nth-last-col(-n+1)", ":nth-last-col(-n-1)", ":nth-last-col(3n-1)"
			],
			"[att^=val i]": ["[att^=val i]", "[att^=\"val\" i]", "[att^=val I]", "[att^=\"val\" I]"],
			"[att*=val i]": ["[att*=val i]", "[att*=\"val\" i]", "[att*=val I]", "[att*=\"val\" I]"],
			"[att$=val i]": ["[att$=val i]", "[att$=\"val\" i]", "[att$=val I]", "[att$=\"val\" I]"],
			"[att^=val s]": ["[att^=val s]", "[att^=\"val\" s]", "[att^=val S]", "[att^=\"val\" S]"],
			"[att*=val s]": ["[att*=val s]", "[att*=\"val\" s]", "[att*=val S]", "[att*=\"val\" S]"],
			"[att$=val s]": ["[att$=val s]", "[att$=\"val\" s]", "[att$=val S]", "[att$=\"val\" S]"]
		}
	},

	"css-pseudo": {
		"title": "Pseudo-Elements Level 4",
		"links": {
			"tr": "css-pseudo",
			"dev": "css-pseudo-4"
		},
		"selectors": {
			"::selection": ["::selection"],
			"::inactive-selection": ["::inactive-selection"],
			"::spelling-error": ["::spelling-error"],
			"::grammar-error": ["::grammar-error"],
			"::marker": ["::marker"],
			"::placeholder": ["::placeholder"]
		}
	},

	"css-scoping": {
		"title": "Scoping Level 1",
		"links": {
			"tr": "css-scoping",
			"dev": "css-scoping"
		},
		"selectors": {
			":host": ":host",
			":host()": [":host(*)", ":host(.foo)"],
			":host-context()": [":host-context(*)", ":host-context(.foo)"],
			"::slotted()": ["::slotted(*)", "::slotted(.foo)"]
		}
	},

	/*
	 * Note: the following media queries must be true in supporting UAs!
	 */
	"css3-mediaqueries": {
		"title": "Media Queries Level 3",
		"links": {
			"tr": "css3-mediaqueries",
			"dev": "mediaqueries-3"
		},
		"Media queries": {
			"negation": ["not print", "not all and (width:1px)"],
			"width": ["(width)", "(min-width:1px)", "(max-width:1000000px)"],
			"height": ["(height)", "(min-height:1px)", "(max-height:1000000px)"],
			"device-width": ["(device-width)", "(min-device-width:1px)", "(max-device-width:1000000px)"],
			"device-height": ["(device-height)", "(min-device-height:1px)", "(max-device-height:1000000px)"],
			"orientation": "(orientation:portrait), (orientation:landscape)",
			"aspect-ratio": [
				"(aspect-ratio)",
				"(min-aspect-ratio:1/1000000)",
				"(min-aspect-ratio:1 / 1000000)",
				"(max-aspect-ratio:1000000/1)",
			],
			"device-aspect-ratio": [
				"(device-aspect-ratio)",
				"(min-device-aspect-ratio:1/1000000)",
				"(min-device-aspect-ratio:1 / 1000000)",
				"(max-device-aspect-ratio:1000000/1)",
			],
			"color": [
				"(color)", "(min-color: 0)", "(max-color: 100)"
			],
			"color-index": [
				"all, (color-index)",
				"(min-color-index: 0)",
				"(max-color-index: 10000000)"
			],
			"monochrome": [
				"all, (monochrome)", "(min-monochrome: 0)", "(max-monochrome: 10000)"
			],
			"resolution": [
				"(resolution)",
				"(min-resolution: 1dpi)",
				"(max-resolution: 1000000dpi)",
				"(max-resolution: 1000000dpcm)"
			],
			"scan": ["not tv, (scan: progressive)", "not tv, (scan: interlace)"],
			"grid": ["all, (grid)", "(grid: 0), (grid: 1)"]
		}
	},

	"mediaqueries-4": {
		"title": "Media Queries Level 4",
		"links": {
			"tr": "mediaqueries-4",
			"dev": "mediaqueries-4"
		},
		"Media queries": {
			"resolution": ["(resolution: infinite)"],
			"hover": ["(hover)", "(hover: none)", "(hover: hover)"],
			"any-hover": ["(any-hover)", "(any-hover: none)", "(any-hover: hover)"],
			"pointer": ["(pointer)", "(pointer: none)", "(pointer: coarse)", "(pointer: fine)"],
			"any-pointer": ["(any-pointer)", "(any-pointer: none)", "(any-pointer: coarse)", "(any-pointer: fine)"],
			"update": ["(update)", "(update: none)", "(update: slow)", "(update: fast)"],
			"overflow-block": ["(overflow-block: none)", "(overflow-block: scroll)", "(overflow-block: optional-paged)", "(overflow-block: paged)"],
			"overflow-inline": ["(overflow-inline: none)", "(overflow-inline: scroll)"],
			"color-gamut": ["(color-gamut)", "(color-gamut: srgb)", "(color-gamut: p3)", "(color-gamut: rec2020)"]
		}
	},

	"mediaqueries-5": {
		"title": "Media Queries Level 5",
		"links": {
			"dev": "mediaqueries-5"
		},
		"Media queries": {
			"prefers-reduced-motion": ["(prefers-reduced-motion: no-preference)", "(prefers-reduced-motion: reduce)"],
			"prefers-reduced-transparency": ["(prefers-reduced-transparency: no-preference)", "(prefers-reduced-transparency: reduce)"],
			"prefers-contrast": ["(prefers-contrast: no-preference)", "(prefers-contrast: high)", "(prefers-contrast: low)"],
			"prefers-color-scheme": ["(prefers-color-scheme: no-preference)", "(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
			"scripting": ["(scripting: none)", "(scripting: initial-only)", "(scripting: enabled)"],
			"light-level": ["(light-level: dim)", "(light-level: normal)", "(light-level: washed)"],
			"environment-blending": ["(environment-blending: opaque)", "(environment-blending: additive)", "(environment-blending: subtractive)"],
			"inverted-colors": ["(inverted-colors: none)", "(light-level: inverted)"],
		}
	},

	"css3-ui": {
		"title": "Basic User Interface Level 3",
		"links": {
			"tr": "css-ui-3",
			"dev": "css-ui-3"
		},
		"properties": {
			"box-sizing": ["border-box", "content-box"],
			"outline-offset": ["-5px", "0", "5px"],
			"resize": ["none", "both", "horizontal", "vertical"],
			"text-overflow": ["clip", "ellipsis"],
			"cursor": [
				"url(foo.png) 2 2, auto", "default", "none", "context-menu", "cell", "vertical-text", "alias", "copy", "no-drop", "not-allowed",
				"grab", "grabbing", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "all-scroll", "zoom-in",
				"zoom-out"
			],
			"caret-color": ["auto", "green"],
			"nav-up": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-right": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-down": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-left": ["auto", "#foo", "#foo current", "#foo root"]
		}
	},

	"css-ui-4": {
		"title": "Basic User Interface Level 4",
		"links": {
			"tr": "css-ui-4",
			"dev": "css-ui-4"
		},
		"properties": {
			"appearance": ["auto", "none"],
			"caret": ["auto", "green", "bar", "green bar"],
			"caret-shape": ["auto", "bar", "block", "underscore"],
			"text-overflow": ["clip", "ellipsis", "fade", "fade(10px)", "fade(10%)", "'foo'"].times(1, 2),
			"user-select": ["auto", "text", "none", "contain", "all"]
		}
	},

	"css3-transitions": {
		"title": "Transitions",
		"links": {
			"tr": "css-transitions-1",
			"dev": "css-transitions-1"
		},
		"properties": {
			"transition-property": ["none", "all", "width", "width, height"],
			"transition-duration": ["0s", "1s", "100ms"],
			"transition-timing-function": [
				"ease", "linear", "ease-in", "ease-out", "ease-in-out",
				"cubic-bezier(.5, .5, .5, .5)",
				"cubic-bezier(.5, 1.5, .5, -2.5)",
				"step-start", "step-end", "steps(3, start)", "steps(5, end)"
			],
			"transition-delay": ["1s", "-1s"],
			"transition": "1s 2s width linear"
		}
	},

	"css-easing-1": {
		"title": "Easing Functions",
		"links": {
			"tr": "css-easing-1",
			"dev": "css-easing-1"
		},
		"properties": {
			"transition-timing-function": ["steps(2, jump-start)", "steps(2, jump-end)", "steps(1, jump-both)", "steps(2, jump-none)"]
		}
	},

	"css3-animations": {
		"title": "Animations",
		"links": {
			"tr": "css-animations-1",
			"dev": "css-animations"
		},
		"properties": {
			"animation-name": ["foo", "foo, bar"],
			"animation-duration": ["0s", "1s", "100ms"],
			"animation-timing-function": [
				"ease", "linear", "ease-in", "ease-out", "ease-in-out",
				"cubic-bezier(.5, .5, .5, .5)",
				"cubic-bezier(.5, 1.5, .5, -2.5)",
				"step-start", "step-end", "steps(3, start)", "steps(5, end)"
			],
			"animation-iteration-count": ["infinite", "8", "4.35"],
			"animation-direction": ["normal", "alternate", "reverse", "alternate-reverse"],
			"animation-play-state": ["running", "paused"],
			"animation-delay": ["1s", "-1s"],
			"animation-fill-mode": ["none", "forwards", "backwards", "both"],
			"animation": "foo 1s 2s infinite linear alternate both"
		},
		"@rules": {
			"@keyframes": "@keyframes foo"
		}
	},

	"css-transforms-1": {
		"title": "Transforms Level 1",
		"links": {
			"tr": "css-transforms-1",
			"dev": "css-transforms"
		},
		"properties": {
			"transform": [
				"none",
				"translate(5px)", "translate(5px, 10px)", "translateY(5px)", "translateX(5px)", "translateY(5%)", "translateX(5%)",
				"scale(2)", "scale(2, -1)", "scaleX(2)", "scaleY(2.5)",
				"rotate(45deg)",
				"skew(45deg)", "skew(45deg, 15deg)", "skewX(45deg)", "skewY(45deg)",
				"matrix(1,-.2,0,1,0,0)", "matrix(1,-.2,0,1,10,10)",
				"translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)",
				"translate3d(0, 0, 5px)", "translateZ(5px)",
				"scale3d(1, 0, -1)", "scaleZ(1.5)",
				"rotate3d(1, 1, 1, 45deg)", "rotateX(-45deg)", "rotateY(-45deg)", "rotateZ(-45deg)",
				"matrix3d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)", "matrix3d(0,0,0,0,0,0,0,0,0,0,1,0,10,10,0,1)",
				"translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)",
				"perspective(600px)"
			],
			"transform-origin": ["10px", "top", "top left", "50% 100%", "left 0%", "left 50% 0"],
			"transform-box": ["border-box", "fill-box", "view-box"],
			"transform-style": ["flat", "preserve-3d"],
			"perspective": ["none", "600px"],
			"perspective-origin": ["10px", "top", "top left", "50% 100%", "left 0%"],
			"backface-visibility": ["visible", "hidden"],
		}
	},

	"css-transforms-2": {
		"title": "Transforms Level 2",
		"links": {
			"dev": "css-transforms-2"
		},
		"properties": {
			"translate": ["none", "50%", "50% 50%", "50% 50% 10px"],
			"scale": ["none"].concat(["2"].times(1, 3)),
			"rotate": ["none"].concat(["", "x", "y", "z", "-1 0 2"].and(["45deg"])).concat(["45deg"].and(["x", "y", "z", "-1 0 2"])),
			"transform-style": ["auto"],
		}
	},

	"css-motion-1": {
		"title": "Motion Path Module Level 1",
		"links": {
			"tr": "motion-1",
			"dev": "motion-1",
			"devtype": "fxtf"
		},
		"properties": {
			"offset": [
				"auto",
				"center",
				"200px 100px ray(45deg closest-side)",
				"200px 100px ray(45deg closest-side) 10%",
				"200px 100px ray(45deg closest-side) 10% reverse",
				"200px 100px ray(45deg closest-side) 10% reverse 45deg",
				"200px 100px ray(45deg closest-side) 10% 45deg reverse",
				"200px 100px ray(45deg closest-side) 45deg 10%",
				"200px 100px ray(45deg closest-side) 45deg reverse 10%",
				"200px 100px ray(45deg closest-side) reverse 10%",
				"auto / center",
				"center / 200px 100px",
				"200px 100px ray(45deg closest-side) / 200px 100px",
				"200px 100px ray(45deg closest-side) 10% / 200px 100px",
				"200px 100px ray(45deg closest-side) 10% reverse / 200px 100px",
				"200px 100px ray(45deg closest-side) 10% reverse 45deg / 200px 100px",
				"200px 100px ray(45deg closest-side) 10% 45deg reverse / 200px 100px",
				"200px 100px ray(45deg closest-side) 45deg 10% / 200px 100px",
				"200px 100px ray(45deg closest-side) 45deg reverse 10% / 200px 100px",
				"200px 100px ray(45deg closest-side) reverse 10% / 200px 100px",
			],
			"offset-path": [
				"none",
				"ray(45deg closest-side)", "ray(45deg farthest-side)", "ray(45deg closest-corner)",
				"ray(45deg farthest-corner)", "ray(45deg sides)", "ray(0.25turn sides contain)",
				"ray(100grad closest-side contain)", "ray(calc(180deg - 0.25turn) closest-side)",
				"inset(10% round 10% 40% 10% 40%)", "ellipse(at top 50% left 20%)", "circle(at right 5% top)",
				"margin-box", "border-box", "padding-box", "content-box", "fill-box", "stroke-box", "view-box",
				"circle(60%) margin-box",
				"polygon(100% 0, 100% 100%, 0 100%)",
				"path('M 20 20 H 80 V 30')",
				"url(image.png)", "url(#id)",
			],
			"offset-distance": "10%",
			"offset-position": ["auto", "200px", "200px 100px", "center"],
			"offset-anchor": ["auto", "200px", "200px 100px", "center"],
			"offset-rotate": ["auto", "0deg", "reverse", "-45deg", "auto 180deg", "reverse 45deg", "2turn reverse"]

		}
	},

	"css-text-3": {
		"title": "Text Level 3",
		"links": {
			"tr": "css-text-3",
			"dev": "css-text-3"
		},
		"properties": {
			"text-transform": ["full-width", "full-size-kana", "capitalize full-width", "capitalize full-width full-size-kana"],
			"tab-size": ["4", "1em"],
			"line-break": ["auto", "loose", "normal", "strict", "anywhere"],
			"word-break": ["normal", "keep-all", "break-all"],
			"white-space": ["break-spaces"],
			"hyphens": ["auto", "manual", "none"],
			"overflow-wrap": ["normal", "break-word", "anywhere"],
			"word-wrap": ["normal", "break-word", "anywhere"],
			"text-align": ["start", "end", "left", "right", "center", "justify", "match-parent", "justify-all"],
			"text-align-all": ["start", "end", "left", "right", "center", "justify", "match-parent"],
			"text-align-last": ["auto", "start", "end", "left", "right", "center", "justify", "match-parent"],
			"text-justify": ["auto", "none", "inter-word", "inter-character"],
			"word-spacing": ["50%"],
			"text-indent": ["1em hanging", "1em each-line", "1em hanging each-line"],
			"hanging-punctuation": [
				"none", "first", "last", "force-end", "allow-end", "first last", "first force-end",
				"first force-end last", "first allow-end last"
			]
		}
	},

	"css-text-4": {
		"title": "Text Level 4",
		"links": {
			"tr": "css-text-4",
			"dev": "css-text-4"
		},
		"properties": {
			"text-space-collapse": ["collapse", "discard", "preserve", "preserve-breaks", "preserve-spaces"],
			"text-space-trim": [
				"none", "trim-inner", " discard-before", "discard-after",
				"trim-inner discard-before", "trim-inner discard-before discard-after"
			],
			"text-wrap": ["wrap", "nowrap", "balance "],
			"wrap-before": ["auto", "avoid", "avoid-line", "avoid-flex", "line", "flex"],
			"wrap-after": ["auto", "avoid", "avoid-line", "avoid-flex", "line", "flex"],
			"wrap-inside": ["auto", "avoid"],
			"hyphenate-character": ["auto", "'\2010'"],
			"hyphenate-limit-zone": ["1%", "1em"],
			"hyphenate-limit-chars": ["auto", "5", "auto 3", "5 4 3"],
			"hyphenate-limit-lines": ["no-limit", "2"],
			"hyphenate-limit-last": ["none", "always", "column", "page", "spread"]
		}
	},

	"css-text-decor-3": {
		"title": "Text Decoration Level 3",
		"links": {
			"tr": "css-text-decor-3",
			"dev": "css-text-decor-3"
		},
		"properties": {
			"text-decoration": "underline dotted green",
			"text-decoration-line": ["none", "underline", "overline", "line-through", "underline overline"],
			"text-decoration-color": "white",
			"text-decoration-style": ["solid", "double", "dotted", "dashed", "wavy"],
			"text-underline-position": ["auto", "under", "left", "right", "under left", "under right"],
			"text-emphasis-style": ["none", "filled", "open", "dot", "circle", "double-circle", "triangle", "sesame", "open dot", "'foo'"],
			"text-emphasis-color": "green",
			"text-emphasis": "open dot green",
			"text-emphasis-position": ["over left", "over right", "under left", "under right"],
			"text-shadow": ["none", "1px 1px", "0 0 black", "1px 2px 3px black"]
		}
	},

	"css-text-decor-4": {
		"title": "Text Decoration Level 4",
		"links": {
			"tr": "css-text-decor-4",
			"dev": "css-text-decor-4"
		},
		"properties": {
			"text-decoration-skip": [
				"none", "objects", "objects spaces", "objects leading-spaces", "objects trailing-spaces", "objects leading-spaces trailing-spaces",
				"objects leading-spaces trailing-spaces edges", "objects leading-spaces trailing-spaces edges box-decoration", "objects edges",
				"objects box-decoration", "spaces", "spaces edges", "spaces edges box-decoration", "spaces box-decoration", "leading-spaces",
				"leading-spaces trailing-spaces edges", "leading-spaces trailing-spaces edges box-decoration", "edges", "edges box-decoration",
				"box-decoration"
			],
			"text-decoration-skip-ink": ["none", "auto"]
		}
	},

	"css-line-grid-1": {
		"title": "Line Grid Level 1",
		"links": {
			"tr": "css-line-grid-1",
			"dev": "css-line-grid-1"
		},
		"properties": {
			"box-snap": ["none", "block-start", "block-end", "center", "baseline", "last-baseline"],
			"line-grid": ["match-parent", "create"],
			"line-snap": ["none", "baseline", "contain"]
		}
	},

	"css3-fonts": {
		"title": "Fonts Level 3",
		"links": {
			"tr": "css-fonts-3",
			"dev": "css-fonts"
		},
		"properties": {
			"font-stretch": [
				"normal", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded",
				"expanded", "extra-expanded", "ultra-expanded"
			],
			"font-size-adjust": ["none", ".5"],
			"font-synthesis": ["none", "weight", "style", "weight style", "style weight"],
			"font-kerning": ["auto", "normal", "none"],
			"font-variant-position": ["normal", "sub", "super"],
			"font-variant-ligatures": [
				"normal", "none",
				"common-ligatures", "no-common-ligatures",
				"discretionary-ligatures", "no-discretionary-ligatures",
				"historical-ligatures", "no-historical-ligatures",
				"contextual", "no-contextual",
				"common-ligatures discretionary-ligatures historical-ligatures contextual"
			],
			"font-variant-caps": [
				"normal", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "titling-caps", "unicase"
			],
			"font-variant-numeric": [
				"normal",
				"lining-nums", "oldstyle-nums",
				"proportional-nums", "tabular-nums",
				"diagonal-fractions", "stacked-fractions",
				"ordinal", "slashed-zero",
				"lining-nums proportional-nums diagonal-fractions",
				"oldstyle-nums tabular-nums stacked-fractions ordinal slashed-zero",
				"slashed-zero ordinal tabular-nums stacked-fractions oldstyle-nums"
			],
			"font-variant-alternates": [
				"normal",
				"historical-forms"
				// TODO add tests for functions
			],
			"font-variant-east-asian": [
				"normal",
				"jis78", "jis83", "jis90", "jis04", "simplified", "traditional",
				"full-width", "proportional-width",
				"ruby", "simplified full-width ruby"
			],

			"font-feature-settings": ["normal", "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"],
		},
		"descriptors": {
			"unicode-range": ["U+416", "U+0-7F", "U+A5, U+4E00-9FFF", "U+30??"]
		},
		"@rules": {
			"@font-face": "@font-face"
		}
	},

	"css4-fonts": {
		"title": "Fonts Level 4",
		"links": {
			"tr": "css-fonts-4",
			"dev": "css-fonts-4"
		},
		"properties": {
			"font-variant": [
				"none", "normal", "all-petite-caps", "historical-forms", "super", "sub lining-nums contextual ruby",
			],
			"font-feature-settings": ["normal", "'swsh' 2"],
			"font-language-override": ["normal", "'SRB'"],
			"font-weight": ["1", "90", "750", "1000"],
			"font-min-size": ["12pt", "small", "smaller", "80%", "0"],
			"font-max-size": ["100pt", "xx-large", "larger", "120%", "infinity"],
			"font-style": ["oblique 15deg", "oblique -15deg", "oblique 0deg"],
			"font-optical-sizing": ["none", "auto"],
			"font-palette": ["normal", "light", "dark"]
		},
		"@rules": {
			"@font-feature-values": "@font-feature-values Jupiter Sans",
			"@font-palette-values": "@font-palette-values Augusta"
		}
	},

	"css3-writing-modes": {
		"title": "Writing Modes",
		"links": {
			"tr": "css-writing-modes-3",
			"dev": "css-writing-modes-3"
		},
		"properties": {
			"direction": ["ltr", "rtl"],
			"unicode-bidi": ["normal", "embed", "isolate", "bidi-override", "isolate-override", "plaintext"],
			"writing-mode": ["horizontal-tb", "vertical-rl", "vertical-lr"],
			"text-orientation": ["mixed", "upright", "sideways"],
			"text-combine-upright": ["none", "all"]
		}
	},

	"css-color-3": {
		"title": "Color Level 3",
		"links": {
			"tr": "css-color-3",
			"dev": "css-color-3"
		},
		"values": {
			"properties": [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"column-rule-color"
			],
			"rgba": "rgba(0,0,0,.5)",
			"#RGB": ["#F06", "#FF0066"],
			"hsl": "hsl(0,0%,0%)",
			"hsla": "hsla(0,0%,0%,.5)",
			"transparent": "transparent",
			"currentColor": "currentColor"
		},
		"properties": {
			"opacity": ["-5", "0", ".5", "1", "2"]
		}
	},

	"css-color-4": {
		"title": "Color Level 4",
		"links": {
			"tr": "css-color-4",
			"dev": "css-color"
		},
		"values": {
			"properties": [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"column-rule-color"
			],
			"Comma-less colors": ["rgb(0% 20% 70%)", "rgb(0 64 185)", "hsl(0 0% 0%)"],
			"/ alpha": ["rgba(0% 20% 70% / 50%)", "rgba(0% 20% 70% / .5)", "rgba(0 64 185 / 50%)", "rgba(0 64 185 / .5)", "hsla(0 0% 0% /.5)"],
			"optional alpha": ["rgb(0% 20% 70% / 50%)", "rgb(0% 20% 70% / .5)", "rgb(0 64 185 / 50%)", "rgb(0 64 185 / .5)", "hsl(0 0% 0% / .5)"],
			"Hex with alpha": ["#000F", "#000000FF"],
			"rebeccapurple": "rebeccapurple",
			"hwb()": ["hwb(0 0% 0%)", "hwb(0 0% 0% / .5)"],
			"lab()": ["lab(0 0 0)", "lab(0 0 0 /.5)"],
			"lch()": ["lch(0 0 0)", "lch(0 0 0 / .5)"],
			"gray()": ["gray(50)", "gray(50 / .5)"],
			"color()": ["color(.2 .4 .6)", "color(image-p3 .2. 4 .6)", "color(foo .2 .4 .6)", "color(.2 .4 .6 / .5)", "color(image-p3 .2 .4 .6  / .5)", "color(foo .2 .4 .6 / .5)"],
			"device-cmyk()": ["device-cmyk(.2 .3 .4 .5)", "device-cmyk(.2 .3 .4 .5 / .5)", "device-cmyk(.2 .3 .4 .5 / 50%)"]
		},
		"properties": {
			"color-adjust": ["economy", "exact"],
			"opacity": ["45%"]
		}
	},

	"css3-multicol": {
		"title": "Multi-column Layout",
		"links": {
			"tr": "css-multicol-1",
			"dev": "css-multicol"
		},
		"properties": {
			"column-width": ["10em", "auto"],
			"column-count": ["2", "auto"],
			"columns": ["100px", "3", "10em 2", "auto 2", "10em auto", "auto auto", "2 10em", "auto 10em", "2 auto"],
			"column-gap": ["1em", "normal"],
			"column-rule-color": "red",
			"column-rule-style": ["none", "solid", "dotted"],
			"column-rule-width": "1px",
			"column-rule": ["transparent", "1px solid black"],
			"column-span": ["none", "all"],
			"column-fill": ["auto", "balance", "balance-all"]
		}
	},

	"css-values-3": {
		"title": "Values and Units Level 3",
		"links": {
			"tr": "css-values-3",
			"dev": "css-values-3"
		},
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"rem": "5rem",
			"ch": "5ch",
			"vw": "5vw",
			"vh": "5vh",
			"vmin": "5vmin",
			"vmax": "5vmax",
			"q": "5q",
			"attr()": ["attr(data-px)", "attr(data-px px)", "attr(data-px px, initial)"],
			"calc()": ["calc(1px + 2px)", "calc(5px*2)", "calc(5px/2)", "calc(100%/3 - 2*1em - 2*1px)", "calc(attr(data-px)*2)", "calc(5px - 10px)", "calc(1vw - 1px)", "calc(calc(100%))"],
		},
		"properties": {
			"transform": [
				"rotate(calc(15deg + 30deg))"
			]
		}
	},

	"css-values-4": {
		"title": "Values and Units Level 4",
		"links": {
			"tr": "css-values-4",
			"dev": "css-values-4"
		},
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"toggle()": ["toggle(1px, 2px)"],
			"min()": ["max(10 * (1vw + 1vh) / 2, 12px)"],
			"max()": ["max(10 * (1vw + 1vh) / 2, 12px)"],
			"clamp()": ["clamp(12px, 10 * (1vw + 1vh) / 2, 100px)"]
		}
	},

	"css-env-1": {
		"title": "Environment Variables Level 1",
		"links": {
			"dev": "css-env-1"
		},
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"env()": [
				"env(safe-area-inset-top)", "env(safe-area-inset-top, 12px)",
				"env(safe-area-inset-right)", "env(safe-area-inset-right, 12px)",
				"env(safe-area-inset-bottom)", "env(safe-area-inset-bottom, 12px)",
				"env(safe-area-inset-left)", "env(safe-area-inset-left, 12px)"]
		}
	},

	"css3-regions": {
		"title": "Regions",
		"links": {
			"tr": "css-regions-1",
			"dev": "css-regions"
		},
		"properties": {
			"flow-from": ["none", "named-flow"],
			"flow-into": ["none", "named-flow"],
			"region-fragment": ["auto", "break"]
		}
	},

	"css3-flexbox": {
		"title": "Flexible Box Layout",
		"links": {
			"tr": "css-flexbox-1",
			"dev": "css-flexbox-1"
		},
		"properties": {
			"align-content": ["flex-start", "flex-end", "space-between", "space-around"],
			"align-items": ["flex-start", "flex-end"],
			"align-self": ["flex-start", "flex-end"],
			"display": ["flex", "inline-flex"],
			"flex": ["none", "5 7 10%"],
			"flex-basis": ["auto", "content", "1px"],
			"flex-direction": ["row", "row-reverse", "column", "column-reverse"],
			"flex-flow": ["row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse"],
			"flex-grow": ["0", "5"],
			"flex-shrink": ["1", "10"],
			"flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
			"justify-content": ["flex-start", "flex-end", "space-between", "space-around"],
			"min-height": ["auto"],
			"min-width": ["auto"],
			"order": ["0", "1"]
		}
	},

	"css-grid-1": {
		"title": "Grid Layout Level 1",
		"links": {
			"tr": "css-grid-1",
			"dev": "css-grid"
		},
		"properties": {
			"display": ["grid", "inline-grid"],
			"grid-template-columns": [
				"none", "auto", "100px", "1fr", "100px 1fr auto",
				"repeat(2, 100px 1fr)",
				"repeat(4, 10px [col-start] 250px [col-end]) 10px",
				"100px 1fr max-content minmax(min-content, 1fr)",
				"repeat(auto-fill, minmax(25ch, 1fr))",
				"10px [col-start] 250px [col-end]",
				"[first nav-start] 150px [main-start] 1fr [last]",
				"10px [col-start] 250px [col-end] 10px [col-start] 250px [col-end] 10px",
				"[a] auto [b] minmax(min-content, 1fr) [b c d] repeat(2, [e] 40px) repeat(5, auto)"
			],
			"grid-template-rows": [
				"none", "auto", "100px", "1fr", "100px 1fr auto",
				"repeat(2, 100px 1fr)",
				"100px 1fr max-content minmax(min-content, 1fr)",
				"10px [row-start] 250px [row-end]",
				"[first header-start] 50px [main-start] 1fr [footer-start] 50px [last]"
			],
			"grid-template-areas": ["none", "'articles'", "'head head'", "'head head' 'nav main' 'foot ....'"],
			"grid-template": ["none", "auto 1fr auto / auto 1fr", "[header-top] 'a   a   a' [header-bottom] [main-top] 'b   b   b' 1fr [main-bottom] / auto 1fr auto"],
			"grid-auto-columns": ["auto", "1fr", "100px", "max-content", "minmax(min-content, 1fr)"],
			"grid-auto-rows": ["auto", "1fr", "100px", "100px 30%", "100px 30% 1em", "min-content", "minmax(min-content, 1fr)"],
			"grid-auto-flow": ["row", "column", "row dense", "column dense"],
			"grid": ["auto-flow 1fr / 100px", "none / auto-flow 1fr", "auto-flow / auto 1fr", "repeat(auto-fill, 5em) / auto-flow 1fr", " auto-flow 1fr / repeat(auto-fill, 5em)", "'H    H ' 'A    B ' 'F    F ' 30px / auto 1fr"],
			"grid-row-start": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-column-start": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-row-end": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-column-end": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-column": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
			"grid-row": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
			"grid-area": ["1 / 1", "1 / span 1", "span / 10 / -1"],
			"grid-column-gap": ["0", "1em"],
			"grid-row-gap": ["0", "1em"],
			"grid-gap": ["0 0", "0 1em", "1em", "1em 1em"]
		}
	},

	"css-grid-2": {
		"title": "Grid Layout Level 2",
		"links": {
			"tr": "css-grid-2",
			"dev": "css-grid-2"
		},
		"properties": {
			"grid-template-columns": ["subgrid"],
			"grid-template-rows": ["subgrid"]
		}
	},

	"css3-align": {
		"title": "Box Alignment",
		"links": {
			"tr": "css-align-3",
			"dev": "css-align"
		},
		"properties": {
			"align-self": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start"],
			"align-items": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start"],
			"align-content": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start"],
			"justify-self": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "left", "right", "safe right"],
			"justify-items": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "left", "right", "safe right", "legacy", "legacy left", "legacy right", "legacy center"],
			"justify-content": ["normal", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start", "left", "right", "safe right"],
			"place-content": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start", "normal normal", "baseline normal", "first baseline normal", "space-between normal", "center normal", "unsafe start normal", "normal stretch", "baseline stretch", "first baseline stretch", "space-between stretch", "center stretch", "unsafe start stretch", "normal safe right", "baseline safe right", "first baseline safe right", "space-between safe right", "center safe right", "unsafe start safe right"],
			"place-items": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "normal normal", "stretch normal", "baseline normal", "first baseline normal", "self-start normal", "unsafe start normal", "normal stretch", "stretch stretch", "baseline stretch", "first baseline stretch", "self-start stretch", "unsafe start stretch", "normal last baseline", "stretch last baseline", "baseline last baseline", "first baseline last baseline", "self-start last baseline", "unsafe start last baseline", "normal legacy left", "stretch legacy left", "baseline legacy left", "first baseline legacy left", "self-start legacy left", "unsafe start legacy left"],
			"gap": ["0 0", "0 1em", "1em", "1em 1em"],
			"column-gap": ["0", "1em"],
			"row-gap": ["0", "1em"],

		}
	},

	"css-cascade-3": {
		"title": "Cascading and Inheritance Level 3",
		"links": {
			"tr": "css-cascade-3",
			"dev": "css-cascade-3"
		},
		"values": {
			"properties": [
				"color",
				"font-weight",
				"background-image",
				"width"
			],
			"unset": "unset"
		},
		"properties": {
			"all": ["initial", "inherit", "unset"]
		}
	},

	"css-cascade-4": {
		"title": "Cascading and Inheritance Level 4",
		"links": {
			"tr": "css-cascade-4",
			"dev": "css-cascade"
		},
		"values": {
			"properties": [
				"color",
				"font-weight",
				"background-image",
				"all"
			],
			"revert": "revert"
		},
		"properties": {
			"all": "revert"
		}
	},

	"css3-conditional": {
		"title": "Conditional Rules",
		"links": {
			"tr": "css3-conditional",
			"dev": "css-conditional-3"
		},
		"@rules": {
			"@support": [
				"@supports (color: green)",
				"@supports not (foo: bar)",
				"@supports (color: green) or (color: red)",
				"@supports (color: green) and (color: red)",
				"@supports (color: green) and (not (foo: bar))",
				"@supports (color: green) or (not (foo: bar))"
			]
		}
	},

	"css-masking": {
		"title": "Masking",
		"links": {
			"tr": "css-masking-1",
			"dev": "css-masking-1",
			"devtype": "fxtf"
		},
		"properties": {
			"clip-path": ["url('#clip')", "inset(50%)", "circle()", "ellipse()", "polygon(0 10px, 30px 0)", "circle() border-box", "border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "none"],
			"clip-rule": ["nonzero", "evenodd"],
			"mask-image": ["none", "linear-gradient(black 0%, transparent 100%)", "url(image.png)"],
			"mask-mode": ["alpha", "luminance", "match-source"],
			"mask-repeat": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2)),
			"mask-position": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"mask-clip": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "no-clip"],
			"mask-origin": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box"],
			"mask-size": ["auto", "10px", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"mask-composite": ["add", "subtract", "intersect", "exclude"],
			"mask": ["top", "space", "url(image.png)", "url(image.png) luminance", "url(image.png) luminance top space"],
			"mask-border-source": ["none", "url(image.png)"],
			"mask-border-slice": ["0 fill", "50% fill", "1.1 fill", "0 1 fill", "0 1 2 fill", "0 1 2 3 fill"],
			"mask-border-width": ["auto", "10px", "50%", "1", "1.0", "auto 1", "auto 1 50%", "auto 1 50% 1.1"],
			"mask-border-outset": ["0", "1.1", "0 1", "0 1 2", "0 1 2 3"],
			"mask-border-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
			"mask-border": ["url(image.png)", "url(image.png) 10px", "url(image.png) space", "url(image.png) 1 fill", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px 2"],
			"mask-type": ["luminance", "alpha"]
		}
	},

	"compositing": {
		"title": "Compositing and Blending",
		"links": {
			"tr": "compositing-1",
			"dev": "compositing-1",
			"devtype": "fxtf"
		},
		"properties": {
			"mix-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
			"isolation": ["auto", "isolate"],
			"background-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal, multiply"]
		}
	},

	"css-display": {
		"title": "Display",
		"links": {
			"tr": "css-display-3",
			"dev": "css-display"
		},
		"properties": {
			"display": [
				"run-in", "flow", "flow-root",
				"block flow", "inline flow", "run-in flow",
				"block flow-root", "inline flow-root", "run-in flow-root",
				"block table", "inline table", "run-in table",
				"block flex", "inline flex", "run-in flex",
				"block grid", "inline grid", "run-in grid",
				"block ruby", "inline ruby", "run-in ruby",
				"inline list-item", "list-item inline flow", "list-item block flow"
			]
		}
	},

	"css-shapes-1": {
		"title": "Shapes Level 1",
		"links": {
			"tr": "css-shapes-1",
			"dev": "css-shapes"
		},
		"properties": {
			"shape-outside": [
				"none", "inset(10% round 10% 40% 10% 40%)", "ellipse(at top 50% left 20%)", "circle(at right 5% top)",
				"polygon(100% 0, 100% 100%, 0 100%)", "margin-box", "border-box", "padding-box", "content-box",
				"inset(10% round 10% 40% 10% 40%) margin-box", "ellipse(at top 50% left 20%) margin-box",
				"circle(at right 5% top) margin-box", "polygon(100% 0, 100% 100%, 0 100%) margin-box", "attr(src url)",
				"url(image.png)"
			],
			"shape-image-threshold": ["0", "1", "0.0", "0.1"],
			"shape-margin": ["0", "10px", "50%"]
		}
	},

	"css-shapes-2": {
		"title": "Shapes Level 2",
		"links": {
			"dev": "css-shapes-2"
		},
		"properties": {
			"shape-inside": [
				"auto", "outside-shape", "shape-box", "display", "inset(10% round 10% 40% 10% 40%)",
				"ellipse(at top 50% left 20%)", "circle(at right 5% top)", "polygon(100% 0, 100% 100%, 0 100%)",
				"url(image.png)"
			],
			"shape-padding": ["0", "10px", "50%"]
		}
	},

	"css3-exclusions": {
		"title": "Exclusions",
		"links": {
			"tr": "css3-exclusions",
			"dev": "css-exclusions"
		},
		"properties": {
			"wrap-flow": ["auto", "both", "start", "end", "minimum", "maximum", "clear"],
			"wrap-through": ["wrap", "none"]
		}
	},

	"filter-effects": {
		"title": "Filter Effects Level 1",
		"links": {
			"tr": "filter-effects-1",
			"dev": "filter-effects-1",
			"devtype": "fxtf"
		},
		"properties": {
			"filter": ["none", "url(#id)", "url(image.svg#id)", "blur(5px)", "brightness(0.5)", "contrast(150%)", "drop-shadow(15px 15px 15px black)", "grayscale(50%)", "hue-rotate(50deg)", "invert(50%)", "opacity(50%)", "sepia(50%)", "saturate(150%)", "grayscale(100%) sepia(100%)"],
			"flood-color": ["black", "#FFF"],
			"flood-opacity": ["1", "0", "0.2", "45%"],
			"color-interpolation-filters": ["auto", "sRGB", "linearRGB"],
			"lighting-color": ["white", "#000"]
		}
	},

	"filters-2": {
		"title": "Filter Effects Level 2",
		"links": {
			"dev": "filter-effects-2",
			"devtype": "fxtf"
		},
		"properties": {
			"backdrop-filter": ["none", "url(#id)", "url(image.svg#id)", "blur(5px)", "brightness(0.5)", "contrast(150%)", "drop-shadow(15px 15px 15px black)", "grayscale(50%)", "hue-rotate(50deg)", "invert(50%)", "opacity(50%)", "sepia(50%)", "saturate(150%)", "grayscale(100%) sepia(100%)"],
		}
	},

	"pointerevents": {
		"title": "Pointer Events",
		"links": {
			"tr": "pointerevents2",
			"dev": "pointerevents",
			"devtype": "github"
		},
		"properties": {
			"touch-action": ["auto", "none", "pan-x", "pan-y", "pan-x pan-y", "manipulation"]
		}
	},

	"fullscreen": {
		"title": "Fullscreen API",
		"links": {
			"tr": "fullscreen",
			"dev": "pointerevents",
			"devtype": "whatwg"
		},
		"selectors": {
			"::backdrop": "::backdrop",
			":fullscreen": ":fullscreen"
		}
	},

	"css3-break": {
		"title": "Fragmentation",
		"links": {
			"tr": "css-break-3",
			"dev": "css-break"
		},
		"properties": {
			"break-before": ["auto", "avoid", "avoid-page", "page", "left", "right", "recto", "verso", "avoid-column", "column", "avoid-region", "region "],
			"break-after": ["auto", "avoid", "avoid-page", "page", "left", "right", "recto", "verso", "avoid-column", "column", "avoid-region", "region "],
			"break-inside": ["auto", "avoid", "avoid-page", "avoid-column", "avoid-region "],
			"box-decoration-break": ["slice", "clone"],
			"orphans": ["1", "2"],
			"widows": ["1", "2"]
		}
	},

	"css3-positioning": {
		"title": "Positioned Layout",
		"links": {
			"tr": "css-position-3",
			"dev": "css-position"
		},
		"properties": {
			"position": ["sticky"],
			"inset-before": ["auto", "10px", "50%"],
			"inset-after": ["auto", "10px", "50%"],
			"inset-start": ["auto", "10px", "50%"],
			"inset-end": ["auto", "10px", "50%"]
		}
	},

	"css-will-change": {
		"title": "Will Change",
		"links": {
			"tr": "css-will-change-1",
			"dev": "css-will-change"
		},
		"properties": {
			"will-change": ["scroll-position", "contents", "transform", "top, left"]
		}
	},

	"cssom-view": {
		"title": "CSSOM View Module",
		"links": {
			"tr": "cssom-view-1",
			"dev": "cssom-view"
		},
		"properties": {
			"scroll-behavior": ["auto", "smooth "]
		}
	},

	"css-ruby-1": {
		"title": "Ruby",
		"links": {
			"tr": "css-ruby-1",
			"dev": "css-ruby-1"
		},
		"properties": {
			"display": ["ruby", "ruby-base", "ruby-text", "ruby-base-container", "ruby-text-container"],
			"ruby-position": ["over", "under", "inter-character"],
			"ruby-merge": ["separate", "collapse", "auto"],
			"ruby-align": ["start", "center", "space-between", "space-around"]
		}
	},

	"css-scroll-snap": {
		"title": "Scroll Snap",
		"links": {
			"tr": "css-scroll-snap-1",
			"dev": "css-scroll-snap-1"
		},
		"properties": {
			"scroll-margin": ["0px", "6px 5px", "10px 20px 30px", "10px 20px 30px 40px", "20px 3em 1in 5rem", "calc(2px)", "calc(3 * 25px)", "calc(3 * 25px) 5px 10em calc(1vw - 5px)"],
			"scroll-margin-block": ["10px", "10px 10px"],
			"scroll-margin-block-end": ["10px"],
			"scroll-margin-block-start": ["10px"],
			"scroll-margin-bottom": ["10px"],
			"scroll-margin-inline": ["10px", "10px 10px"],
			"scroll-margin-inline-start": ["10px"],
			"scroll-margin-inline-end": ["10px"],
			"scroll-margin-left": ["10px"],
			"scroll-margin-right": ["10px"],
			"scroll-margin-top": ["10px"],
			"scroll-padding": ["auto", "0px", "6px 5px", "10px 20px 30px", "10px 20px 30px 40px", "10px auto 30px auto", "10%", "20% 3em 1in 5rem", "calc(2px)", "calc(50%)", "calc(3 * 25px)", "calc(3 * 25px) 5px 10% calc(10% - 5px)"],
			"scroll-padding-block": ["10px", "50%", "10px 50%", "50% 50%"],
			"scroll-padding-block-end": ["10px", "50%"],
			"scroll-padding-block-start": ["10px", "50%"],
			"scroll-padding-bottom": ["10px", "50%"],
			"scroll-padding-inline": ["10px", "50%", "10px 50%", "50% 50%"],
			"scroll-padding-inline-end": ["10px", "50%"],
			"scroll-padding-inline-start": ["10px", "50%"],
			"scroll-padding-left": ["10px", "50%"],
			"scroll-padding-right": ["10px", "50%"],
			"scroll-padding-top": ["10px", "50%"],
			"scroll-snap-align": ["none", "start", "end", "center", "none start", "end center", "center start", "end none", "center center"],
			"scroll-snap-stop": ["normal", "always"],
			"scroll-snap-type": [
				"none", "x mandatory", "y mandatory", "block mandatory", "inline mandatory", "both mandatory",
				"x proximity", "y proximity", "block proximity", "inline proximity", "both proximity"
			]
		}
	},

	"css-scroll-anchoring": {
		"title": "Scroll Anchoring",
		"links": {
			"dev": "css-scroll-anchoring"
		},
		"properties": {
			"overflow-anchor": ["none", "auto"]
		}
	},

	"css-logical-1": {
		"title": "Logical Properties",
		"links": {
			"tr": "css-logical-1",
			"dev": "css-logical-1",
		},
		"properties": {
			"caption-side": ["inline-start", "inline-end"],
			"float": ["inline-start", "inline-end"],
			"clear": ["inline-start", "inline-end"],
			"text-align": ["start", "end"],
			"resize": ["block", "inline"],
			"block-size": ["100px"],
			"inline-size": ["100px"],
			"min-block-size": ["100px"],
			"min-inline-size": ["100px"],
			"max-block-size": ["100px"],
			"max-inline-size": ["100px"],
			"margin-block": ["10px", "10px 10px"],
			"margin-block-start": ["10px"],
			"margin-block-end": ["10px"],
			"margin-inline": ["10px", "10px 10px"],
			"margin-inline-start": ["10px"],
			"margin-inline-end": ["10px"],
			"inset": ["10px", "10px 10px", "10px 10px 10px", "10px 10px 10px 10px"],
			"inset-block": ["10px", "10px 10px"],
			"inset-block-start": ["10px"],
			"inset-block-end": ["10px"],
			"inset-inline": ["10px", "10px 10px"],
			"inset-inline-start": ["10px"],
			"inset-inline-end": ["10px"],
			"padding-block": ["10px", "10px 10px"],
			"padding-block-start": ["10px"],
			"padding-block-end": ["10px"],
			"padding-inline": ["10px", "10px 10px"],
			"padding-inline-start": ["10px"],
			"padding-inline-end": ["10px"],
			"border-block": ["1px", "2px dotted", "medium dashed green"],
			"border-block-start": ["1px", "2px dotted", "medium dashed green"],
			"border-block-start-width": ["thin"],
			"border-block-start-width": ["thin"],
			"border-block-start-style": ["dotted"],
			"border-block-start-color": ["navy"],
			"border-block-end": ["1px", "2px dotted", "medium dashed green"],
			"border-block-end-width": ["thin"],
			"border-block-end-style": ["dotted"],
			"border-block-end-color": ["navy"],
			"border-block-width": ["thin 2px"],
			"border-block-style": ["dotted dashed"],
			"border-block-color": ["navy blue"],
			"border-inline": ["1px", "2px dotted", "medium dashed green"],
			"border-inline-start": ["1px", "2px dotted", "medium dashed green"],
			"border-inline-start-width": ["thin"],
			"border-inline-start-style": ["dotted"],
			"border-inline-start-color": ["navy"],
			"border-inline-end": ["1px", "2px dotted", "medium dashed green"],
			"border-inline-end-width": ["thin"],
			"border-inline-end-style": ["dotted"],
			"border-inline-end-color": ["navy"],
			"border-inline-width": ["thin 2px"],
			"border-inline-style": ["dotted dashed"],
			"border-inline-color": ["navy blue"],
			"border-start-start-radius": ["0", "50%", "250px 100px"],
			"border-start-end-radius": ["0", "50%", "250px 100px"],
			"border-end-start-radius": ["0", "50%", "250px 100px"],
			"border-end-end-radius": ["0", "50%", "250px 100px"],
			"margin": ["logical 5px 10px 15px 20px"],
			"padding": ["logical 5px 10px 15px 20px"],
			"border-color": ["logical red green blue yellow"],
			"border-style": ["logical solid dotted dashed none"],
			"border-width": ["logical 5px 10px 15px 20px"],
			"background-image-transform": ["logical", "physical", "rotate"],
			"background-repeat": ["logical repeat-x no-repeat"],
			"border-image-transform": ["logical", "physical", "rotate"]
		}
	},

	"css-lists": {
		"title": "Lists Level 3",
		"links": {
			"tr": "css-lists-3",
			"dev": "css-lists-3"
		},
		"properties": {
			"list-style-type": [
				"disclosure-closed", "disclosure-open",
				"hebrew",
				"cjk-decimal", "cjk-ideographic",
				"hiragana", "katakana", "hiragana-iroha", "katakana-iroha",
				"japanese-informal", "japanese-formal", "korean-hangul-formal",
				"korean-hanja-informal", "korean-hanja-formal",
				"simp-chinese-informal", "simp-chinese-formal",
				"trad-chinese-informal", "trad-chinese-formal",
				"cjk-heavenly-stem", "cjk-earthly-branch",
				"trad-chinese-informal", "trad-chinese-formal",
				"simp-chinese-informal", "simp-chinese-formal",
				"japanese-informal", "japanese-formal",
				"arabic-indic", "persian", "urdu",
				"devanagari", "gurmukhi", "gujarati",
				"oriya", "kannada", "malayalam", "bengali",
				"tamil", "telugu", "thai", "lao",
				"myanmar", "khmer",
				"hangul", "hangul-consonant",
				"ethiopic-halehame", "ethiopic-numeric",
				"ethiopic-halehame-am",
				"ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et",
				"other-style", "inside", "outside", "\\32 style",
				'"-"', "'-'",
				"symbols(\"*\" \"\\2020\" \"\\2021\" \"\\A7\")",
				"symbols(cyclic '*' '\\2020' '\\2021' '\\A7')"
			],
			"marker-side": ["match-self", "match-parent"],
			"counter-reset": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"],
			"counter-set": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"],
			"counter-increment": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"],
			"content": [
				"counter(chno, upper-latin) '. '",
				"counter(section, upper-roman) ' - '",
				"' [' counter(bq, decimal) ']'",
				"counter(notecntr, disc) ' '",
				"counter(p, none)",
				"counter(h1, upper-alpha) '.' counter(h2, decimal) ' '",
				"'(' counters(list-item, '.') ') '"
			]
		},
		"@rules": {
			"@counter-style": "@counter-style foo"
		}
	},

	"css-overflow-3": {
		"title": "Overflow Level 3",
		"links": {
			"tr": "css-overflow-3",
			"dev": "css-overflow-3"
		},
		"properties": {
			"line-clamp": ["none", "1", "5 clip", "5 ellipsis", "5 \"… (continued on next page)\""],
			"max-lines": ["none", "1"],
			"overflow-x": ["visible", "hidden", "clip", "scroll", "auto"],
			"overflow-y": ["visible", "hidden", "clip", "scroll", "auto"],
			"overflow-inline": ["visible", "hidden", "clip", "scroll", "auto"],
			"overflow-block": ["visible", "hidden", "clip", "scroll", "auto"],
			"continue": ["auto", "discard"],
		},
	},

	"css-overflow-4": {
		"title": "Overflow Level 4",
		"links": {
			"tr": "css-overflow-4",
			"dev": "css-overflow-4"
		},
		"selectors": {
			"::nth-fragment()": [
				":nth-fragment(even)", ":nth-fragment(odd)",
				":nth-fragment(n)", ":nth-fragment(-n)", ":nth-fragment(0n)",
				":nth-fragment(1)", ":nth-fragment(-1)", ":nth-fragment(0)",
				":nth-fragment(n+1)", ":nth-fragment(3n+1)", ":nth-fragment(3n + 1)",
				":nth-fragment(-n+1)", ":nth-fragment(3n-1)"
			]
		}
	},

	"css-containment": {
		"title": "Containment",
		"links": {
			"dev": "css-contain"
		},
		"properties": {
			"contain": ["none", "strict", "content", "size", "layout", "style", "paint"]
		}
	},

	"css-sizing-3": {
		"title": "Intrinsic & Extrinsic Sizing",
		"links": {
			"tr": "css-sizing-3",
			"dev": "css-sizing-3"
		},
		"properties": {
			"width": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"],
			"min-width": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"],
			"max-width": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"],
			"height": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"],
			"min-height": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"],
			"max-height": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"],
			"column-width": ["stretch", "max-content", "min-content", "fit-content", "fit-content(10%)"]
		}
	},

	"overscroll-behavior": {
		"title": "Overscroll Behavior",
		"links": {
			"dev": "css-overscroll-behavior"
		},
		"properties": {
			"overscroll-behavior": ["contain", "none", "auto"].times(1, 2),
			"overscroll-behavior-x": ["contain", "none", "auto"],
			"overscroll-behavior-y": ["contain", "none", "auto"]
		}
	},

	"css-scrollbars-1": {
		"title": "Scrollbars Level 1",
		"links": {
			"tr": "css-scrollbars-1",
			"dev": "css-scrollbars"
		},
		"properties": {
			"scrollbar-color": ["auto", "dark", "light", "red blue"],
			"scrollbar-width": ["auto", "thin", "none", "12px"]
		}
	},

	"webvtt": {
		"title": "WebVTT",
		"links": {
			"tr": "webvtt1",
			"dev": "webvtt",
			"devtype": "github"
		},
		"selectors": {
			"::cue": ["::cue"],
			"::cue()": ["::cue(span)"],
			"::cue-region": ["::cue-region"],
			"::cue-region()": ['::cue-region(span)']
		}
	},

	"css-paint-api-1": {
		"title": "Painting API Level 1",
		"links": {
			"tr": "css-paint-api-1",
			"dev": "css-paint-api-1",
			"devtype": "houdini"
		},
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"cursor",
				"content"
			],
			"paint()": [
				"paint(company-logo)", "paint(chat-bubble, blue)", "paint(failing-argument-syntax, 1px, 2px)", "paint(arc, purple, 0.4turn, 0.8turn, 40px, 15px)"
			]
		}
	},

	"css-layout-api-1": {
		"title": "Layout API Level 1",
		"links": {
			"tr": "css-layout-api-1",
			"dev": "css-layout-api-1",
			"devtype": "houdini"
		},
		"properties": {
			"display": "layout(foo)"
		}
	},

	"css-shadow-parts": {
		"title": "Shadow Parts",
		"links": {
			"tr": "css-shadow-parts-1",
			"dev": "css-shadow-parts"
		},
		"selectors": {
			"::part": ["::part(label)"]
		}
	},

	"css-variables": {
		"title": "Custom Properties for Cascading Variables",
		"links": {
			"tr": "css-variables",
			"dev": "css-variables-1"
		},
		"declaration": {
			"--*": ["--foo: 2px"],
			"var(--*)": [
				"width: var(--foo)", "width: var(--FOO)", "width: var(--foo, 4px)",
				"color: rgba(255, 255, 255, var(--foo, .2) )"
			]
		}
	},

	"fill-stroke": {
		"title": "Fill and Stroke Level 3",
		"links": {
			"tr": "fill-stroke-3",
			"dev": "fill-stroke",
			"devtype": "fxtf"
		},
		"properties": {
			"fill": [
				"url(foo.png), url(bar.svg)",
				"top left / 50% 60%",
				"border-box",
				"border-box padding-box",
				"url(foo.png) bottom right / cover padding-box content-box"
			],
			"fill-rule": ["nonzero", "evenodd"],
			"fill-break": ["bounding-box", "slice", "clone"],
			"fill-color": "green",
			"fill-image": [
				"url(foo.png)",
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)",
				"image(green)",
				"linear-gradient(to bottom, yellow 0%, blue 100%)",
				"child",
				"child(2)"
			],
			"fill-origin": ["match-parent", "fill-box", "stroke-box", "content-box", "padding-box", "border-box"],
			"fill-position": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"fill-size": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"fill-repeat": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2)),
			"fill-opacity": ["0.5", "45%"],
			"stroke": [
				"url(foo.png), url(bar.svg)",
				"top left / 50% 60%",
				"border-box",
				"border-box padding-box",
				"url(foo.png) bottom right / cover padding-box content-box"
			],
			"stroke-width": ["0", "1px", "25%"],
			"stroke-align": ["center", "inset", "outset "],
			"stroke-linecap": ["butt", "round", "square "],
			"stroke-linejoin": [
				"crop", "arcs", "miter", "bevel", "round", "fallback",
				"crop bevel", "arcs round", "miter fallback"
			],
			"stroke-miterlimit": "4",
			"stroke-break": ["bounding-box", "slice", "clone "],
			"stroke-dasharray": ["none", "0", "4px", "4px 12%", "4px 12% 3em", "4px 12% 3em 5px", "4px 12% 3em 5px 10%"],
			"stroke-dashoffset": ["0", "4px", "12%"],
			"stroke-dash-corner": ["none", "15px"],
			"stroke-dash-justify": [
				"none", "stretch", "compress", "dashes", "gaps",
				"stretch dashes", "compress gaps dashes",
				"stretch gaps", "compress dashes gaps"
			],
			"stroke-color": "green",
			"stroke-image": [
				"url(foo.png)",
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)",
				"image(green)",
				"linear-gradient(to bottom, yellow 0%, blue 100%)",
				"child",
				"child(2)"
			],
			"stroke-origin": ["match-parent", "fill-box", "stroke-box", "content-box", "padding-box", "border-box"],
			"stroke-position": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"stroke-size": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"stroke-repeat": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2)),
			"stroke-opacity": ["0.5", "45%"],
		}
	}
};
