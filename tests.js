window.Specs = {
	"css3-background": {
		"title": "Backgrounds and Borders",
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
			"border-radius": ["10px", "50%", "10px / 20px", "2px 4px 8px 16px"],
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

	"css3-images": {
		"title": "Image Values and Replaced Content",
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"cursor",
				"content"
			],
			"linear-gradient": [
				"linear-gradient(white, black)",
				"linear-gradient(to right, white, black)",
				"linear-gradient(45deg, white, black)",
				"linear-gradient(white 50%, black)",
				"linear-gradient(white 5px, black)",
				"linear-gradient(white, #f06, black)",
				"linear-gradient(currentColor, black)"
			],
			"radial-gradient": [
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
			"repeating-linear-gradient": "repeating-linear-gradient(white, black)",
			"repeating-radial-gradient": "repeating-radial-gradient(white, black)",
			"image()": [
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)", "image(green)"
			],
		},
		"properties": {
			"object-fit": ["fill", "contain", "cover", "none", "scale-down"],
			"object-position": ["50% 50%", "center", "top right", "bottom 10px right 20px"],
			"image-resolution": ["from-image", "from-image snap", "snap from-image", "1dppx", "1dpcm", "300dpi", "from-image 300dpi", "300dpi from-image", "300dpi from-image snap"],
			"image-orientation": ["0deg", "90deg", "45deg", "1turn", "100grad", "2rad"]
		}
	},

	"css3-selectors": {
		"title": "Selectors",
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
				":nth-child(n+1)",":nth-child(3n+1)", ":nth-child(3n + 1)",
				":nth-child(-n+1)", ":nth-child(-n-1)", ":nth-child(3n-1)"
			],
			":nth-last-child": [
				":nth-last-child(even)", ":nth-last-child(odd)",
				":nth-last-child(n)", ":nth-last-child(-n)", ":nth-last-child(0n)",
				":nth-last-child(1)", ":nth-last-child(-1)", ":nth-last-child(0)",
				":nth-last-child(n+1)",":nth-last-child(3n+1)", ":nth-last-child(3n + 1)",
				":nth-last-child(-n+1)", ":nth-last-child(-n-1)", ":nth-last-child(3n-1)"
			],
			":nth-of-type": [
				":nth-of-type(even)", ":nth-of-type(odd)",
				":nth-of-type(n)", ":nth-of-type(-n)", ":nth-of-type(0n)",
				":nth-of-type(1)", ":nth-of-type(-1)", ":nth-of-type(0)",
				":nth-of-type(n+1)",":nth-of-type(3n+1)", ":nth-of-type(3n + 1)",
				":nth-of-type(-n+1)", ":nth-of-type(-n-1)", ":nth-of-type(3n-1)"
			],
			":nth-last-of-type": [
				":nth-last-of-type(even)", ":nth-last-of-type(odd)",
				":nth-last-of-type(n)", ":nth-last-of-type(-n)", ":nth-last-of-type(0n)",
				":nth-last-of-type(1)", ":nth-last-of-type(-1)", ":nth-last-of-type(0)",
				":nth-last-of-type(n+1)",":nth-last-of-type(3n+1)", ":nth-last-of-type(3n + 1)",
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

	/*
	 * Note: the following media queries must be true in supporting UAs!
	 */
	"css3-mediaqueries": {
		"title": "Media Queries",
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

	"css3-ui": {
		"title": "Basic User Interface",
		"properties": {
			"box-sizing": ["border-box", "content-box"],
			"outline-offset": ["-5px", "0", "5px"],
			"resize": ["none", "both", "horizontal", "vertical"],
			"text-overflow": ["clip", "ellipsis", "'foo'"].times(1, 2),
			"cursor": [
				"url(foo.png) 2 2, auto", "default", "none", "context-menu", "cell", "vertical-text", "alias", "copy", "no-drop", "not-allowed",
				"ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "all-scroll", "zoom-in", "zoom-out"
			],
			"caret-color": ["auto", "green"],
			"nav-up": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-right": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-down": ["auto", "#foo", "#foo current", "#foo root"],
			"nav-left": ["auto", "#foo", "#foo current", "#foo root"]
		},
		"selectors": {
			":indeterminate": ":indeterminate",
			":default": ":default",
			":valid": ":valid",
			":invalid": ":invalid",
			":in-range": ":in-range",
			":out-of-range": ":out-of-range",
			":required": ":required",
			":optional": ":optional",
			":read-only": ":read-only",
			":read-write": ":read-write"
		}
	},

	"css3-transitions": {
		"title": "Transitions",
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

	"css3-animations": {
		"title": "Animations",
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

	"css3-transforms": {
		"title": "Transforms",
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

	"css3-text": {
		"title": "Text",
		"properties": {
			"text-transform": ["full-width"],
			"tab-size": ["4", "1em"],
			"line-break": ["auto", "loose", "normal", "strict"],
			"word-break": ["normal", "keep-all", "break-all"],
			"hyphens": ["auto", "manual", "none"],
			"overflow-wrap": ["normal", "break-word"],
			"word-wrap": ["normal", "break-word"],
			"text-align": ["start", "end", "match-parent", "start end"],
			"text-align-last": ["auto", "start", "end", "left", "right", "center", "justify"],
			"text-justify": ["auto", "none", "inter-word", "distribute"],
			"word-spacing": ["50%"],
			"text-indent": ["1em hanging", "1em each-line", "1em hanging each-line"],
			"hanging-punctuation": ["none", "first", "last", "force-end", "allow-end", "first last"]
		}
	},

	"css-text-decor-3": {
		"title": "Text Decoration",
		"properties": {
			"text-decoration-line": ["none", "underline", "overline", "line-through", "underline overline"],
			"text-decoration-color": "white",
			"text-decoration-style": ["solid", "double", "dotted", "dashed", "wavy"],
			"text-decoration": "underline dotted green",
			"text-decoration-skip": ["none", "objects", "spaces", "ink", "edges", "box-decoration", "objects edges"],
			"text-underline-position": ["auto", "under", "left", "right", "under left", "under right"],
			"text-emphasis-style": ["none", "filled", "open", "dot", "circle", "double-circle", "triangle", "sesame", "open dot", "'foo'"],
			"text-emphasis-color": "green",
			"text-emphasis": "open dot green",
			"text-emphasis-position": ["over left", "over right", "under left", "under right"],
			"text-shadow": ["none", "1px 1px", "0 0 black", "1px 2px 3px black"]
		}
	},

	"css3-fonts": {
		"title": "Fonts",
		"properties": {
			"font-stretch": ["normal", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
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
			"font-variant-caps": ["normal", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "titling-caps", "unicase"],
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
			"font-variant": ["none", "sub lining-nums contextual ruby"],
			"font-feature-settings": ["normal", "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"],
			"font-language-override": ["normal", "'SRB'"],
			"unicode-range": ["U+416", "U+0-7F", "U+A5, U+4E00-9FFF", "U+30??"]
		},
		"@rules": {
			"@font-face": "@font-face",
			"@font-feature-values": "@font-feature-values Jupiter Sans"
		}
	},

	"css3-writing-modes": {
		"title": "Writing Modes",
		"properties": {
			"direction": ["ltr", "rtl"],
			"unicode-bidi": ["normal", "embed", "isolate", "bidi-override", "isolate-override", "plaintext"],
			"writing-mode": ["horizontal-tb", "vertical-rl", "vertical-lr"],
			"text-orientation": ["mixed", "upright", "sideways-right", "sideways-left", "sideways", "use-glyph-orientation"],
			"caption-side": ["block-start", "block-end"],
			"text-combine-horizontal": ["none", "all", "digits 2"]
		}
	},

	"css3-color": {
		"title": "Color",
		"values": {
			"properties": [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"column-rule-color"
			],
			"rgba": "rgba(0,0,0,.5)",
			"hsl": "hsl(0,0%,0%)",
			"hsla": "hsla(0,0%,0%,.5)",
			"transparent": "transparent",
			"currentColor": "currentColor"
		},
		"properties": {
			"opacity": ["-5", "0", ".5", "1", "2"]
		}
	},

	"css3-multicol": {
		"title": "Multi-column Layout",
		"properties": {
			"column-width": ["10em", "auto"],
			"column-count": ["2", "auto"],
			"columns": ["100px", "3", "10em 2", "auto 2", "10em auto", "auto auto", "2 10em", "auto 10em", "2 auto"],
			"column-gap": ["1em", "normal"],
			"column-rule-color": "red",
			"column-rule-style": ["none", "solid", "dotted"],
			"column-rule-width": "1px",
			"column-rule": ["transparent", "1px solid black"],
			"break-before": ["auto", "always", "avoid", "left", "right", "page", "column", "avoid-page", "avoid-column"],
			"break-after": ["auto", "always", "avoid", "left", "right", "page", "column", "avoid-page", "avoid-column"],
			"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
			"column-span": ["none", "all"],
			"column-fill": ["auto", "balance"]
		}
	},

	"css3-values": {
		"title": "Values and Units",
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
			"calc()": ["calc(1px + 2px)", "calc(5px*2)", "calc(5px/2)", "calc(100%/3 - 2*1em - 2*1px)", "calc(attr(data-px)*2)", "calc(5px - 10px)", "calc(1vw - 1px)"],
			"toggle()": "toggle(1px, 2px)"
		}
	},

	"css3-regions": {
		"title": "Regions",
		"properties": {
			"break-after": ["region"],
			"break-before": ["region"],
			"flow-from": ["none", "named-flow"],
			"flow-into": ["none", "named-flow"],
			"region-fragment": ["auto", "break"]
		}
	},

	"css3-speech": {
		"title": "Speech",
		"properties": {
			"voice-volume": ["silent", "x-soft", "soft", "medium", "loud", "x-loud", "-6dB", "0", "6db"],
			"voice-balance": ["left", "center", "right", "leftwards", "rightwards", "-100", "0", "100"],
			"speak": ["auto"],
			"speak-as": ["normal", "spell-out", "digits", "literal-punctuation", "no-punctuation"],
			"pause-before": ["none", "x-weak", "weak", "medium", "strong", "x-strong"],
			"pause-after": ["none", "x-weak", "weak", "medium", "strong", "x-strong"],
			"pause": ["none", "x-weak", "weak", "medium", "strong", "x-strong"],
			"rest-before": ["none", "x-weak", "weak", "medium", "strong", "x-strong", "+3s", "250ms"],
			"rest-after": ["none", "x-weak", "weak", "medium", "strong", "x-strong", "+3s", "250ms"],
			"rest": ["none", "x-weak", "weak", "medium", "strong", "x-strong", "+3s", "250ms"],
			"cue-before": ["-6dB", "0", "6db"],
			"cue-after": ["-6dB", "0", "6db"],
			"cue": ["-6dB", "0", "6db"],
			"voice-family": ["preserve"],
			"voice-rate": ["normal", "x-slow", "slow", "medium", "fast", "x-fast", "0", "100%"],
			"voice-pitch": ["absolute", "x-low", "low", "medium", "high", "x-high", "0", "100%", "-100%", "250Hz", "+250Hz", "-20Hz", ".2kHz", "-3.5st", "3.5st"],
			"voice-range": ["absolute", "x-low", "low", "medium", "high", "x-high", "0", "100%", "-100%", "250Hz", "+250Hz", "-20Hz", ".2kHz", "-3.5st", "3.5st"],
			"voice-stress": ["normal", "strong", "moderate", "none", "reduced "],
			"voice-duration": ["auto", "+3s", "250ms"]
		}
	},

	"css3-flexbox": {
		"title": "Flexible Box Layout",
		"properties": {
			"align-content": ["flex-start", "flex-end", "space-between", "space-around"],
			"align-items": ["flex-start", "flex-end"],
			"align-self": ["flex-start", "flex-end"],
			"display": ["flex", "inline-flex"],
			"flex": ["none", "5 7 10%"],
			"flex-basis": ["auto", "content", "1px"],
			"flex-direction": ["row","row-reverse","column","column-reverse"],
			"flex-flow": ["row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse"],
			"flex-grow": ["0","5"],
			"flex-shrink": ["1","10"],
			"flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
			"justify-content": ["flex-start", "flex-end", "space-between", "space-around"],
			"min-height": ["auto"],
			"min-width": ["auto"],
			"order": ["0", "1"]
		}
	},

	"css3-grid-layout": {
		"title": "Grid Layout",
		"properties": {
			"display": ["grid", "inline-grid"],
			"grid-template-columns": ["none", "subgrid", "auto", "100px", "1fr", "100px 1fr auto", "repeat(2, 100px 1fr)", "100px 1fr max-content minmax(min-content, 1fr)", "10px [col-start] 250px [col-end]"],
			"grid-template-rows": ["none", "subgrid", "auto", "100px", "1fr", "100px 1fr auto", "repeat(2, 100px 1fr)", "100px 1fr max-content minmax(min-content, 1fr)", "10px [row-start] 250px [row-end]"],
			"grid-template-areas": ["none", "'articles'", "'head head'", "'head head' 'nav main' 'foot ....'"],
			"grid-template": ["none", "auto 1fr auto / auto 1fr", "auto 1fr auto / [header-top] 'a a a' [header-bottom] [main-top] 'b b b' 1fr [main-bottom]"],
			"grid-auto-columns": ["auto", "1fr", "100px", "max-content", "minmax(min-content, 1fr)"],
			"grid-auto-rows": ["auto", "1fr", "100px", "min-content", "minmax(min-content, 1fr)"],
			"grid-auto-flow": ["row", "column", "row dense", "column dense"],
			"grid": ["column 1fr / auto"],
			"grid-row-start": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-column-start": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-row-end": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-column-end": ["auto", "4", "C", "C 2", "span C", "span 1"],
			"grid-column": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
			"grid-row": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
			"grid-area": ["1 / 1", "1 / span 1", "span / 10 / -1"]
			/* These are on their way into the draft spec, currently only in editors draft */
			// "grid-column-gap": ["normal", "1em"],
			// "grid-row-gap": ["normal", "1em"],
			// "grid-gap": ["normal", "normal 1em", "1em", "1em 1em"]
		}
	},

	"css3-align": {
		"title": "Box Alignment",
		"properties": {
			"align-self": ["auto", "stretch", "baseline", "center", "start", "end", "self-start", "self-end", "left", "right", "true", "safe", "start true", "start safe"],
			"align-items": ["auto", "stretch", "baseline", "center", "start", "end", "self-start", "self-end", "left", "right", "true", "safe", "start true", "start safe"],
			"align-content": ["auto", "baseline", "center", "start", "end", "self-start", "self-end", "left", "right", "start start", "start flex-end", "start start self-end", "start start safe", "start start self-end safe"],
			"justify-self": ["auto", "stretch", "baseline", "center", "start", "end", "self-start", "self-end", "left", "right", "true", "safe", "start true", "start safe", "self-start true", "self-end safe"],
			"justify-items": ["auto", "stretch", "baseline", "center", "start", "end", "self-start", "self-end", "left", "right", "true", "safe", "start true", "start safe", "self-start true", "self-end safe", "legacy", "legacy left", "legacy right", "legacy center"],
			"justify-content": ["auto", "baseline", "center", "start", "end", "self-start", "self-end", "left", "right", "start start", "start self-end", "start start self-end", "start start safe", "start start self-end safe"]
		}
	},

	"css3-cascade": {
		"title": "Cascading and Inheritance",
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

	"css3-conditional": {
		"title": "Conditional Rules",
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
		"properties": {
			"clip-path": ["url('#clip')", "inset(50%)", "circle()", "ellipse()", "polygon(0 10px, 30px 0)", "circle() border-box", "border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "none"],
			"clip-rule": ["nonzero", "evenodd"],
			"mask-image": ["none", "linear-gradient(black 0%, transparent 100%)", "url(image.png)"],
			"mask-mode": ["alpha", "luminance", "auto"],
			"mask-repeat": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2)),
			"mask-position": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"mask-clip": ["border-box", "padding-box", "content-box", "margin-box", "fill", "stroke", "view-box", "no-clip"],
			"mask-origin": ["border-box", "padding-box", "content-box", "margin-box", "fill", "stroke", "view-box"],
			"mask-size": ["auto", "10px", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"mask-composite": ["add", "subtract", "intersect", "exclude"],
			"mask": ["top", "space", "url(image.png')", "url(image.png') luminance", "url(image.png') luminance top space"],
			"mask-border-source": ["none", "url(image.png)"],
			"mask-border-slice": ["0 fill", "50% fill", "1.1 fill", "0 1 fill", "0 1 2 fill", "0 1 2 3 fill"],
			"mask-border-width": ["auto", "10px", "50%", "1", "1.0", "auto 1", "auto 1 50%", "auto 1 50% 1.1"],
			"mask-border-outset": ["0", "1.1", "0 1", "0 1 2", "0 1 2 3"],
			"mask-border-repeat": ["stretch", "repeat", "round", "space"].times(1,2),
			"mask-border": ["url(image.png)", "url(image.png) 10px", "url(image.png) space", "url(image.png) 1 fill", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px 2"],
			"mask-type": ["luminance", "alpha"]
		}
	},

	"compositing": {
		"title": "Compositing and Blending",
		"properties": {
			"mix-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
			"isolation": ["auto", "isolate"],
			"background-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal, multiply"]
		}
	},

	"css-shapes": {
		"title": "Shapes",
		"properties": {
			"shape-outside": ["none", "inset(10% round 10% 40% 10% 40%)", "ellipse(at top 50% left 20%)", "circle(at right 5% top)", "polygon(100% 0, 100% 100%, 0 100%)", "margin-box", "border-box", "padding-box", "content-box", "inset(10% round 10% 40% 10% 40%) margin-box", "ellipse(at top 50% left 20%) margin-box", "circle(at right 5% top) margin-box", "polygon(100% 0, 100% 100%, 0 100%) margin-box", "attr(src url)", "url(image.png)"],
			"shape-image-threshold": ["0", "1", "0.0", "0.1"],
			"shape-margin": ["0", "10px", "50%"]
		}
	},
	
	"css3-exclusions": {
		"title": "Exclusions",
		"properties": {
			"wrap-flow": ["auto", "both", "start", "end", "minimum", "maximum", "clear"],
			"wrap-through": ["wrap", "none"]
		}
	},

	"filter-effects": {
		"title": "Filter Effects",
		"properties": {
			"filter": ["none", "url(#id)", "url(image.svg#id)", "blur(5px)", "brightness(0.5)", "contrast(150%)", "drop-shadow(15px 15px 15px black)", "grayscale(50%)", "hue-rotate(50deg)", "invert(50%)", "opacity(50%)", "sepia(50%)", "saturate(150%)", "grayscale(100%) sepia(100%)"],
		}
	},

	"pointerevents": {
		"title": "Pointer Events",
		"properties": {
			"touch-action": ["auto", "none", "pan-x", "pan-y", "pan-x pan-y", "manipulation"]
		}
	},
	
	"fullscreen": {
		"title": "Fullscreen API",
		"selectors": {
			"::backdrop": "::backdrop",
			":fullscreen": ":fullscreen"
		}	
	},

	"css3-break": {
		"title": "Fragmentation",
		"properties": {
			"break-after": ["any", "recto", "verso"],
			"break-before": ["any", "recto", "verso"],
			"break-inside": ["avoid-region"],
			"box-decoration-break": ["slice", "clone"],
			"orphans": ["1", "2"],
			"widows": ["1", "2"]
		}
	},

	"css3-positioning": {
		"title": "Positioning",
		"properties": {
			"position": ["sticky"]
		}
	},

	"css-will-change": {
		"title": "Will Change",
		"properties": {
			"will-change": ["scroll-position", "contents", "transform", "top, left"]
		}
	},

	"cssom-view": {
		"title": "CSSOM View Module",
		"properties": {
			"scroll-behavior": ["auto", "smooth "]
		}
	},

	"css-ruby-1": {
		"title": "Ruby",
		"properties": {
			"display": ["ruby", "ruby-base", "ruby-text", "ruby-base-container", "ruby-text-container"],
			"ruby-position" : ["over", "under", "inter-character"],
			"ruby-merge" : ["separate", "collapse", "auto"],
			"ruby-align" : ["start", "center", "space-between",	"space-around"]			
		}
	},
	
	"css-snappoints": {
		"title": "Scroll Snap Points",
		"properties": {
			"scroll-snap-type": ["none", "mandatory", "proximity"],
			"scroll-snap-points-x": ["none", "repeat(100%)", "repeat(120px)", "repeat(calc(3*25px))"],
			"scroll-snap-points-y": ["none", "repeat(100%)", "repeat(120px)", "repeat(calc(3*25px))"],
			"scroll-snap-destination": ["0px 0px", "25% 25%", "6px 5px", "20% 3em", "0 0", "0in 1in", "top", "right", "top left", "top right", "center", "calc(2px)", "calc(50%)", "calc(3*25px)", "calc(3*25px) 5px", "5px calc(3*25px)", "calc(20%) calc(3*25px)", "calc(25px*3)", "calc(3*25px + 50%)"],
			"scroll-snap-coordinate": ["none", "25% 25%", "6px 5px", "20% 3em", "0 0", "0in 1in", "top", "right", "top left", "top right", "center", "calc(2px)", "calc(50%)", "calc(3*25px)", "calc(3*25px) 5px", "5px calc(3*25px)", "calc(20%) calc(3*25px)", "calc(25px*3)", "calc(3*25px + 50%)", "calc(20%) calc(3*25px), center"],
		}
	},

	"css-logical-properties": {
		"title": "Logical Properties",
		"properties": {
			"caption-side": ["block-start", "block-end", "inline-start", "inline-end"],
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
			"margin-block-start": ["10px"],
			"margin-block-end": ["10px"],
			"margin-inline-start": ["10px"],
			"margin-inline-end": ["10px"],
			"offset-block-start": ["10px"],
			"offset-block-end": ["10px"],
			"offset-inline-start": ["10px"],
			"offset-inline-end": ["10px"],
			"padding-block-start": ["10px"],
			"padding-block-end": ["10px"],
			"padding-inline-start": ["10px"],
			"padding-inline-end": ["10px"],
			"border-block-start-width": ["thin"],
			"border-block-end-width": ["thin"],
			"border-inline-start-width": ["thin"],
			"border-inline-end-width": ["thin"],
			"border-block-start-style": ["dotted"],
			"border-block-end-style": ["dotted"],
			"border-inline-start-style": ["dotted"],
			"border-inline-end-style": ["dotted"],
			"border-block-start-color": ["navy"],
			"border-block-end-color": ["navy"],
			"border-inline-start-color": ["navy"],
			"border-inline-end-color": ["navy"],
			"margin": ["logical 5px 10px 15px 20px"],
			"padding": ["logical 5px 10px 15px 20px"],
			"border-color": ["logical red green blue yellow"],
			"border-style": ["logical solid dotted dashed none"],
			"border-width": ["logical 5px 10px 15px 20px"],
			"background-image-transform": ["logical", "physical", "rotate"],
			"background-repeat": ["logical repeat-x no-repeat"],
			"border-image-transform": ["logical", "physical", "rotate"]
		}
	}
};
