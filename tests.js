window.Specs = {
    "css3-background": {
        "title": "Backgrounds and Borders 3",
        "properties": {
            "background-repeat": ["space", "round"].concat(["repeat", "space", "round", "no-repeat"].times(2)),
            "background-image": "url(foo.png), url(bar.svg)",
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
            "box-decoration-break": ["slice", "clone"],
            "box-shadow": [
                "1px 1px", "0 0 black", "1px 2px 3px black", "1px 2px 3px 4px black",
                "inset 1px 1px", "1px 2px 3px 4px black inset"
            ]
        }
    },

    "css-background-4": {
        "title": "Backgrounds and Borders 4",
        "properties": {
            "background-repeat": ["extend"],
            "background-position": ["start 20px", "end 20px"],
            "corner-shape": ["round", "bevel", "scoop", "notch", "round bevel", "round bevel scoop notch"],
            "corners": ["bevel 50%", "bevel 0.25em 0.25em 0 0 / 50% 50% 0 0"],
            "border-limit": ["all", "sides", "corners", "sides 50%", "left 4em", "corners 10px", "corners", "corners"],
            "border-clip": ["normal", "10px", "10px 30% 50px", "0 5px 2em 25px", "40px 20px 0 1fr repeat(20px 20px) 0 1fr 40px"],
            "background-position": ["start 20px", "end 20px"]
        }
    },

    "css3-images": {
        "title": "Image Values and Replaced Content 3",
        "values": {
            "properties": [
                "background",
                "background-image",
                "list-style-image",
                "border-image",
                "border-image-source",
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
                "linear-gradient(currentColor, black)",
                "linear-gradient(to top right, red, white, blue)",
                "linear-gradient(30grad left 35px, red, blue)",
                "linear-gradient(10deg 20px, red, blue)",
                "linear-gradient(218rad, red 50%, 50%, blue 50%)",
                "linear-gradient(to bottom, yellow 0%, blue 100%)",
                "linear-gradient(red -50%, white 25%, blue 100%)",
                "linear-gradient(red -50px, white calc(-25px + 50%), blue 100%)",
                "linear-gradient(90deg, red, transparent, blue)"
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
                "radial-gradient(60% 60%, white, black)"
                /*,
                        "radial-gradient(at 60% 60%, white, black)",
                        "radial-gradient(30% 30% at 20% 20%, white, black)",
                        "radial-gradient(5em circle at top left, yellow, blue)",
                        "radial-gradient(circle farthest-side at top left, white, black)"*/
            ],
            "repeating-linear-gradient": "repeating-linear-gradient(white, black)",
            "repeating-radial-gradient": "repeating-radial-gradient(white, black)",
            "image-set()": [
                "image-set('foo.png' 1x, 'foo-2x.png' 2x);",
                "image-set('foo.png' 1x, 'foo-2x.png' 2x #ccc);",
                "image-set('foo.png' 1x, 'foo-2x.png' 2x, 'foo-print.png' 600dpi );"
            ],
            "-webkit-image-set()": [
                "image-set(url(foo.png) 1x, url(foo-2x.png) 2x)",
                "image-set(url(foo.png) 1x, url(foo-2x.png) 2x, url(foo-3x.png) 3x)",
                "image-set(url(foo.png) 1.5x)",
                "image-set(url(foo.png) 600dpi)"
            ],

            //http://trac.webkit.org/changeset/100535
            // Demo: http://peter.sh/files/examples/cross-fading.html
            // 新语法：cross-fade() = cross-fade( [ <percentage>? && <image> ] [, <image> | <color> ]? )
            "-webkit-cross-fade()": [
                "cross-fade(url(foo.png), url(bar.png), 20%)",
                "cross-fade(url(foo.png), url(bar.png), 100%)",
                "cross-fade(url(foo.png), url(bar.png), 0.2)"
            ]
        },
        "properties": {
            "object-fit": ["fill", "contain", "cover", "none", "scale-down"],
            "object-position": ["50% 50%", "center", "top right", "bottom 10px right 20px"],
            "image-resolution": ["from-image", "from-image snap", "snap from-image", "1dppx", "1dpcm", "300dpi", "from-image 300dpi", "300dpi from-image", "300dpi from-image snap"],
            "image-orientation": ["0deg", "90deg", "45deg", "1turn", "100grad", "2rad"],
            "image-rendering": ["auto", "crisp-edges", "pixelated", "optimizeQuality", "optimizeSpeed", "optimize-contrast"],
            "-ms-interpolation-mode": ["nearest-neighbor", "bicubic"]
        }
    },

    "css-images-4": {
        "title": "Image Values and Replaced Content 4",
        "values": {
            "properties": [
                "background",
                "background-image",
                "list-style-image",
                "border-image",
                "border-image-source",
                "cursor",
                "content"
            ],
            "image()": [
                "image('sprites.png#xywh=10,30,60,20')",
                "image('wavy.svg', 'wavy.png' , 'wavy.gif')",
                "image('dark.png', black)", "image(green)",
                "image(rgba(0,0,255,.5)), url('bg-image.png')"
            ],

            "element()": [
                "element(#foo)"
            ],
        },
        "properties": {
            "conic-gradient": [
                "conic-gradient(white, black)",
                "conic-gradient(circle, white, black)",
                "conic-gradient(ellipse, white, black)",
                "conic-gradient(closest-corner, white, black)",
                "conic-gradient(circle closest-corner, white, black)",
                "conic-gradient(farthest-side, white, black)",
                "conic-gradient(circle farthest-side, white, black)",
                "conic-gradient(50%, white, black)",
                "conic-gradient(60% 60%, white, black)"
            ],
            "repeating-conic-gradient": "repeating-conic-gradient(white, black)"
        }
    },

    "css3-selectors": {
        "title": "Selectors 3",
        "selectors": {
            "Sibling combinator": "foo ~ bar",
            "::before": "::before",
            "::after": "::after",
            "::first-letter": "::first-letter",
            "::first-line": "::first-line",
            "[att^=val]": ["[att^=val]", "[att^=\"val\"]"],
            "[att*=val]": ["[att*=val]", "[att*=\"val\"]"],
            "[att$=val]": ["[att$=val]", "[att$=\"val\"]"],
            "[att|=en]":  ["[att|=en]", "[att|=\"en\"]"],
            "Namespaces": ["*|html", "[*|attr]", "[*|attr=val]", "*|html[*|attr]"],
            ":target": [":target", ":target::before"],
            ":dir()": [":dir(rtl)", ":dir(ltr)"],
            ":lang()": ":lang(fr-be)",
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
            ":not()": [":not(*)", ":not(element)", ":not(.class):not(#id):not([attr]):not(:link)", "h2:not(:first-of-type):not(:last-of-type)"],
            ":blank": ":blank"
        }
    },

    "selectors4": {
        "title": "Selectors 4",
        "selectors": {
            ">>": ">>",
            "Column combinator": "col.selected || td",
            "[i]": "[frame=hsides i]", //Case-sensitivity
            ":current()": ["a:current", ":current(p, li, dt, dd)"],
            ":past": ":past",
            ":future": ":future",
            ":matches()": [".foo :matches(h1, h2, h3, h4, h5, h6)", ":matches(section, nav) h1", ":matches(section, nav) ~ :matches(h1, h2)", ":matches(:hover, :focus)"],
            ":any()": [".foo :any(h1, h2, h3, h4, h5, h6)", ":any(section, nav) h1", ":any(section, nav) ~ :any(h1, h2)", ":any(:hover, :focus)"],
            ":not()": [":not(element, .class, #id)", ":not(element, .class, #id):not(.foo, .bar)","h2:not(:first-of-type, :last-of-type)"],
            ":has()": ["a:has(> img)","dt:has(+ dt)","section:not(:has(h1, h2, h3, h4, h5, h6))"],
            ":drop()": [":drop(active)", ":drop(valid active invalid)"],
            ":any-link": ":any-link",
            ":focus-within": ":focus-within",
            ":nth-column": ":future",
            ":nth-column": [
                ":nth-column(even)", ":nth-column(odd)",
                ":nth-column(n)", ":nth-column(-n)", ":nth-column(0n)",
                ":nth-column(1)", ":nth-column(-1)", ":nth-column(0)",
                ":nth-column(n+1)", ":nth-column(3n+1)", ":nth-column(3n + 1)",
                ":nth-column(-n+1)", ":nth-column(-n-1)", ":nth-column(3n-1)"
            ],
            ":nth-last-column": [
                ":nth-last-column(even)", ":nth-last-column(odd)",
                ":nth-last-column(n)", ":nth-last-column(-n)", ":nth-last-column(0n)",
                ":nth-last-column(1)", ":nth-last-column(-1)", ":nth-last-column(0)",
                ":nth-last-column(n+1)", ":nth-last-column(3n+1)", ":nth-last-column(3n + 1)",
                ":nth-last-column(-n+1)", ":nth-last-column(-n-1)", ":nth-last-column(3n-1)"
            ],

            ":future": ":future",
            ":nth-child(An+B [of s]?)": [":nth-child(-n+3 of li.important)", ":nth-child(even of :not([hidden]))", "tr:nth-child(even of tr:nth-child(odd))"],
            ":nth-last-child(An+B [of s]?)": [":nth-last-child(-n+3 of li.important)", ":nth-last-child(even of :not([hidden]))"],
            ":lang()": [":lang('*-Hant')", ":lang(zh, '*-hant')", ":lang(*-Hant-CN)", ":lang(en-)", ":lang(en--)", ":lang(en, de-DE)"],
            //https://bugs.webkit.org/show_bug.cgi?id=118162
            //https://bugzilla.mozilla.org/show_bug.cgi?id=1069012
            //http://caniuse.com/#feat=css-placeholder
            ":placeholder-shown": ":placeholder-shown"
        }
    },

    "css-scoping": {
        "title": "CSS Scoping Module Level 1",
        "selectors": {
            ":scope": ":scope",
            ":unresolved": ":unresolved",
            ":host": ":host",
            ":host()": ":host(.foo)",
            ":host-context()": ":host-context(.foo)",
            "::shadow": "::shadow",
            "::content": "::content",
            "::region": "::region",
            "deep": "/deep/",
            ">>>": ">>>"
        },
        "@rules": {
            "@scope": [
                "@scope div",
                "@scope .foo"
            ]
        }
    },

    /*
     * Note: the following media queries must be true in supporting UAs!
     */
    "css3-mediaqueries": {
        "title": "Media Queries",
        "Media queries": {
            "not": ["not print", "not all and (width:1px)", "not grid and (width:1px)", "not (max-width: 50px)", "all and not (monochrome)", "not ((any-pointer:none) or (any-pointer:on-demand))"],
            "only": ["only print", "only print and (color)", "only screen and (color)", "only speech and (width:1px)", "only grid and (width:1px)", "only (max-width: 50px)", "all and only (monochrome)", "only ((any-pointer:none) or (any-pointer:on-demand))"],
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
                "(device-aspect-ratio: 16/9)",
                "(device-aspect-ratio: 1280/720)",
                "(min-device-aspect-ratio:1/1000000)",
                "(min-device-aspect-ratio:1 / 1000000)",
                "(max-device-aspect-ratio:3/2)",
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
                "(max-resolution: 1.5dppx)",
                "(max-resolution: 1000000dpi)",
                "(max-resolution: 1000000dpcm)"
            ],
            "scan": ["not tv, (scan: progressive)", "not tv, (scan: interlace)"],
            "grid": ["all, (grid)", "(grid: 0), (grid: 1)", "(grid: -0)"]
        }
    },

    "mediaqueries-4": {
        "title": "Media Queries 4",
        "Media queries": {
            "width": ["(width >= 500px)", "(width <= 1200px)", "(500px <= width <= 1200px)"],
            "height": ["(height >= 500px)", "(height <= 1200px)", "(500px <= height <= 1200px)"],
            "pointer": ["(pointer: none)", "(pointer: coarse)", "(pointer: fine)"],
            "hover": ["(hover)", "(hover: on-demand)", "(hover: none)"],
            "any-pointer": ["(any-pointer)", "(any-pointer: none)", "(any-pointer: coarse)", "(any-pointer: fine)", "not (any-pointer: fine)"],
            "any-hover": ["(any-hover)", "(any-hover: hover)", "(any-hover: on-demand)", "(any-hover: none)"],
            "scripting": ["(scripting: none)", "(scripting: initial-only)", "(scripting: enabled)"],
            "light-level": ["(light-level: dim)", "(light-level: normal)", "(light-level: washed)"],
            "update-frequency": ["(update-frequency: none)", "(update-frequency: slow)", "(update-frequency: normal)"],
            "overflow-block": ["(overflow-block: none)", "(overflow-block: scroll)", "(overflow-block: optional-paged)", "(overflow-block: paged)"],
            "overflow-inline": ["(overflow-inline: none)", "(overflow-inline: scroll)"]
        }
    },


    "css3-ui": {
        "title": "Basic User Interface",
        "properties": {
            "content": "icon",
            "icon": ["auto", "url(foo.png)", "url(foo.png), url(foo.gif)"],
            "box-sizing": ["border-box", "padding-box", "content-box"],
            "outline-offset": ["-5px", "0", "5px"],
            "resize": ["none", "both", "horizontal", "vertical"],
            "text-overflow": ["clip", "ellipsis", "'foo'"].times(1, 2),
            "cursor": [
                "url(foo.png) 2 2, auto", "default", "none", "context-menu", "cell", "vertical-text", "alias", "copy", "no-drop", "not-allowed",
                "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "all-scroll", "zoom-in", "zoom-out"
            ],
            "nav-index": ["auto", "1", "10"],
            "nav-up": ["auto", "#foo", "#foo current", "#foo root"],
            "nav-right": ["auto", "#foo", "#foo current", "#foo root"],
            "nav-down": ["auto", "#foo", "#foo current", "#foo root"],
            "nav-left": ["auto", "#foo", "#foo current", "#foo root"],
            "ime-mode": ["auto", "normal", "active", "inactive", "disabled"]
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
            ":read-write": ":read-write",
            "::value": "::value",
            "::choices": "::choices",
            "::repeat-item": "::repeat-item",
            "::repeat-index": "::repeat-index"
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
            "transition": [
                "1s 2s width linear",
                "0"
            ]
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
            "animation": [
                "foo 200ms ease .8s infinite alternate both",
                "foo 200ms ease .8s infinite alternate both paused",
                "0"
            ]
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
            "transform-style": ["flat", "preserve-3d"],
            "perspective": ["none", "600px"],
            "perspective-origin": ["10px", "top", "top left", "50% 100%", "left 0%"],
            "backface-visibility": ["visible", "hidden"],
        }
    },

    "css3-text": {
        "title": "Text Level 3",
        "properties": {
            "text-transform": ["full-width"],
            "tab-size": ["4", "1em"],
            "line-break": ["auto", "loose", "normal", "strict"],
            "word-break": ["normal", "keep-all", "break-all"],
            "hyphens": ["auto", "manual", "none"],
            "overflow-wrap": ["normal", "break-word"],
            "word-wrap": ["normal", "break-word"],
            "text-align": ["start", "end", "justify", "match-parent", "justify-all"],
            "text-align-last": ["auto", "start", "end", "left", "right", "center", "justify"],
            "text-align-all": ["start", "end", "left", "right", "center", "justify", "match-parent"],
            "text-justify": ["auto", "none", "inter-word", "distribute"],
            "word-spacing": ["50%", "1em", "normal"],
            "letter-spacing": ["normal"],
            "text-indent": ["1em hanging", "1em each-line", "1em hanging each-line"],
            "hanging-punctuation": ["none", "first", "last", "force-end", "allow-end", "first last"]
        }
    },

    "css-text-4": {
        "title": "Text Level 4",
        "properties": {
           "text-space-collapse": ["collapse", "discard", "preserve", "preserve-breaks"],
           "text-space-trim": ["none", "trim-inner", "consume-before", "consume-after", "consume-before consume-after", "none consume-before", "trim-inner consume-after"],
           "text-wrap": ["normal", "nowrap", "avoid", "balance"],
           "hyphenate-character": ["auto", "\"\\2010\"", "'\\2010'"],
           "hyphenate-limit-zone": ["20%", "5em", ".86em", "30px"],
           "hyphenate-limit-chars": ["5", "5 2", "5 2 2"],
           "hyphenate-limit-lines": ["no-limit", "0", "13"],
           "hyphenate-limit-last": ["none", "always", "column", "page", "spread"],
           "text-spacing": ["normal", "none", "trim-start", "space-start", "trim-end", "space-end", "allow-end", "trim-adjacent", "space-adjacent", "no-compress", "ideograph-alpha", "ideograph-numeric", "punctuation", "space-start allow-end trim-adjacent"]
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
        "title": "CSS Color Module Level 3",
        "values": {
            "properties": [
                "color",
                "background-color",
                "border-color",
                "text-decoration-color",
                "text-emphasis-color",
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

    "css-color": {
        "title": "CSS Color Module Level 4",
        "values": {
            "properties": [
                "color",
                "background-color",
                "border-color",
                "text-decoration-color",
                "text-emphasis-color",
                "column-rule-color"
            ],
            "#rrggbbaa": ["#0033ffcc", "#03fc"],
            "rgba": "rgba(0, 0, 100%, 80%)",
            "hsl": ["hsl(0deg, 80%, 50%)", "hsl(120deg, 20%, 56%)", "hsl(orange greenish, 20%, 56%)", "hsl(orangish(20%) red, 20%, 56%)"],
            "hsla": "hsla(0, 0%, 0%, 80%)",
            "gray()": ["gray(0)", "gray(16)", "gray(255, 50%)", "gray(255, .2)"],
            "hwb()": ["hwb(90, 0%, 0%, 0.5)", "hwb(190, 50%, 0%)", "hwb(190, 50%, 10%, .2)", "hwb(120deg, 44%, 50%)"],
            "color()": ["color(yellow blend(blue 50%))", "color(red)", "color(red tint(50%))", "color(hsla(125, 50%, 50%, .4) hue(200))", "color(yellow blend(blue 50% hsl))", ],
            "device-cmyk()": "device-cmyk(0, 81%, 81%, 30%)"
        },
        "properties": {
            "opacity": ["0%", "63%", "100%"],
            "color-correction": ["auto", "sRGB"],
            "color-adjust": ["economy", "exact"]
        }
    },

    "css3-multicol": {
        "title": "Multi-column Layout",
        "properties": {
            "column-width": ["10em", "auto"],
            "column-count": ["2", "auto"],
            "columns": ["100px", "3", "10em 2", "auto 2", "10em auto", "auto auto", "2 10em", "auto 10em", "2 auto"],
            "column-gap": ["1em", "normal"],
            "column-rule-color": ["red"],
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
                "height",
                "min-width",
                "max-width",
                "min-height",
                "max-height",
                "left",
                "line-height",
                "letter-spacing",
                "word-spacing",
                "text-indent",
                "vertical-align",
                "border-spacing",
                "outline-width",
                "outline-offset",
                "magrin",
                "padding",
                "border-left-width",
                "border-image-width",
                "background-position",
                "background-size",
                "column-gap",
                "column-rule-width",
                "column-width",
                //integer
                "flex-basis",
                "flex",
                "flex-grow",
                "flex-shrink",
                "order",
                "mask-position",
                "mask-size",
                "mask-border-width",
                "shape-image-threshold",
                "shape-margin",
                "motion-offset",
                "motion-rotation",
                "object-position",
                "image-resolution",
                "image-orientation",
                "transition",
                "transition-delay",
                "transition-duration",
                "animation-duration",
                "animation-iteration-count",
                "animation-delay",
                "transform-style",
                "perspective",
                "tab-size"
            ],
            "rem": "5rem",
            "ch": "5ch",
            "vw": "5vw",
            "vh": "5vh",
            "vmin": "5vmin",
            "vmax": "5vmax",
            //More case http://dev.w3.org/csswg/css-egg/#celestial-css
            "attr()": ["attr(data-px)", "attr(title color)", "attr(data-px px)", "attr(data-px px, initial)", "attr(end-of-quote string, inherit)", "linear-gradient(attr(data-bg-rotation deg), blue, green)", "calc( 10px + attr(data-addition px))"],
            "calc()": ["calc(1px + 2px)", "calc(5px*2)", "calc(5px/2)", "calc(5px/2 - 2*1px)", "calc(100%/10)", "calc(100%/3 - 2*1em - 2*1px)", "calc(attr(data-px)*2)", "calc(5px - 10px)", "calc(1vw - 1px)"],
            "toggle()": "toggle(1px, 2px)"
        },
        "properties": {
            "content": ["attr(data-foo)", "attr(class)", "attr(width px, auto)"]
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

    "css3-flexbox": {
        "title": "Flexible Box Layout",
        "properties": {
            "display": ["flex", "inline-flex"],
            "align-content": ["flex-start", "flex-end", "center", "space-between", "space-around"],
            "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around"],
            "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
            "align-self": ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
            "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
            "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
            "flex-flow": ["row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse"],
            "flex": ["none", "auto", "0", "5 7 10%", "0 0 calc(100%/3)"],
            "flex-grow": ["0", "5"],
            "flex-shrink": ["1", "10"],
            "flex-basis": ["auto", "1px", "calc(100%/3)", "content", "fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content"],
            "order": ["0", "1"]
        }
    },

    "css3-grid-layout": {
        "title": "Grid Layout",
        "properties": {
            "display": ["grid", "inline-grid"],
            "grid-template-columns": ["none", "subgrid", "auto", "100px", "1fr", "100px 1fr auto", "repeat(2, 100px 1fr)", "100px 1fr 100px 1fr 100px", "100px 1fr max-content minmax(min-content, 1fr)", "10px (col-start) 250px (col-end)"],
            "grid-template-rows": ["none", "subgrid", "auto", "100px", "1fr", "100px 1fr auto", "repeat(2, 100px 1fr)", "100px 1fr 100px 1fr 100px", "100px 1fr max-content minmax(min-content, 1fr)", "10px (row-start) 250px (row-end)"],
            "grid-template-areas": ["none", "'articles'", "'nav articles'", "'. a' 'b a' '. a'"],
            "grid-template": ["none", "subgrid", "auto 1fr auto / auto 1fr", "auto 1fr auto / (row-start) 'a   a   a' (row-end)"],
            "grid-auto-columns": ["auto", "1fr", "100px", "min-content", "max-content", "minmax(min-content, 1fr)"],
            "grid-auto-rows": ["auto", "1fr", "100px", "min-content", "max-content", "minmax(min-content, 1fr)"],
            "grid-auto-flow": ["row", "column", "dense", "stack", "dense stack", "row dense", "dense row", "dense column", "stack column", "stack row"],
            /*
                     Removed
                     http://www.w3.org/blog/CSS/2014/02/22/minutes-seattle-f2f-part-ii/
                     "grid-auto-position": ["1 / 1"],
                     */
            "grid": ["auto", "columns 1fr / auto", "subgrid", "row", "column", "rows 1fr"],
            "grid-row-start": ["auto", "4", "'C'", "'C' 2", "span 'C'", 'span 1'],
            "grid-column-start": ["auto", "4", "'C'", "'C' 2", "span 'C'", 'span 1'],
            "grid-row-end": ["auto", "4", "'C'", "'C' 2", "span 'C'", 'span 1'],
            "grid-column-end": ["auto", "4", "'C'", "'C' 2", "span 'C'", 'span 1'],
            "grid-column": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
            "grid-row": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
            "grid-area": ["auto", "1 / 1", "1 / span 1", "span / 10 / -1", "articles"]
        }
    },

    "css3-align": {
        "title": "Box Alignment",
        "properties": {
            "justify-self": ["auto", "stretch", "baseline", "last-baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe", "left safe", "right safe"],
            "align-self": ["auto", "stretch", "baseline", "last-baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe", "left safe", "right safe"],
            "justify-items": ["auto", "stretch", "baseline", "last-baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe", "legacy  left", "legacy right", "legacy center"],
            "align-items": ["auto", "stretch", "baseline", "last-baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe"],
            "justify-content": ["auto", "baseline", "last-baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "left", "right", "center safe", "start safe", "end safe", "flex-start safe", "flex-end safe", "left safe", "right safe", "center true", "start true", "end true", "flex-start true", "flex-end true", "left true", "right true", "space-between center", "space-around start", "space-evenly end", "stretch flex-start", "space-between flex-end", "space-between left", "space-between right", "space-between center safe", "space-around start true"],
            "align-content": ["auto", "baseline", "last-baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "left", "right", "center safe", "start safe", "end safe", "flex-start safe", "flex-end safe", "left safe", "right safe", "center true", "start true", "end true", "flex-start true", "flex-end true", "left true", "right true", "space-between center", "space-around start", "space-evenly end", "stretch flex-start", "space-between flex-end", "space-between left", "space-between right", "space-between center safe", "space-around start true"],
        }
    },

    "css-cascade-3": {
        "title": "CSS Cascading and Inheritance Level 3",
        "properties": {
            "all": ["initial", "inherit", "unset"]
        },
        "values": {
            "properties": [
                "unicode-bidi",
                "direction",
                "background-color",
                "border-color",
                "text-decoration",
                "column-rule-color"
            ],
            "unset": "unset"
        },
        "@rules": {
            "@import": [
                "@import url('mystyle.css')",
                "@import url('fineprint.css') print",
                "@import url('bluish.css') projection, tv",
                "@import url('narrow.css') handheld and (max-width: 400px)"
            ]
        }
    },

    "css-cascade-4": {
        "title": "CSS Cascading and Inheritance Level 4",
        "values": {
            "properties": [
                "unicode-bidi",
                "direction",
                "background-color",
                "border-color",
                "text-decoration",
                "column-rule-color"
            ],
            "default": "default"
        },
        "@rules": {
            "@import": [
                "@import url('fallback-layout.css') supports(display: block)",
                "@import url('fallback-layout.css') supports(not (display: flex))"
            ]
        }
    },

    "css3-positioning": {
        "title": "Positioned Layout Module",
        "properties": {
            "position": ["sticky", "center", "page"]
        }
    },

    "css3-conditional": {
        "title": "Conditional Rules",
        "@rules": {
            "@support": [
                "@supports (color: green){display:block}",
                "@supports (color: green !important)",
                "@supports not (foo: bar)",
                "@supports (color: green) or (color: red)",
                "@supports (color: green) and (color: red)",
                "@supports (color: green) and (not (foo: bar))",
                "@supports (color: green) or (not (foo: bar))"
            ]
        }
    },

    "css-counter-styles": {
        "title": "CSS Counter Styles",
        "@rules": {
            "@counter-style": [
                "@counter-style triangle {system: cyclic;}",
                "@counter-style box-corner"
            ]
        }
    },

    "css3-sizing": {
        "title": "Intrinsic & Extrinsic Sizing",
        "properties": {
            "width":        ["fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content"],
            "height":       ["fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content"],
            "min-width":    ["fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "contain-floats"],
            "min-height":   ["fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "contain-floats"],
            "max-width":    ["fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content"],
            "max-height":   ["fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content"],
            "column-width": ["fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content"]
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

    //fxtf group
    "css-masking-1": {
        "title": "Masking",
        "group": "fxtf",
        "properties": {
            "clip-path": ["url('#clip')", "rectangle", "inset-rectangle", "circle", "ellipse", "border-box", "padding-box", "content-box", "margin-box", "fill", "stroke", "view-box", "none"],
            "clip-rule": ["nonzero", "evenodd"],
            "mask-image": ["none", "linear-gradient(black 0%, transparent 100%)", "url(image.png)"],
            "mask-mode": ["auto", "alpha", "luminance"],
            "mask-type": ["alpha", "luminance"],
            "mask-repeat": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2)),
            "mask-position": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"],
            "mask-clip": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "no-clip"],
            "mask-origin": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box"],
            "mask-size": ["auto", "10px", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
            "mask-composite": ["add", "subtract", "intersect", "exclude"],
            "mask": ["top", "space", "url(image.png')", "url(image.png') luminance", "url(image.png') luminance top space"],
            "mask-border-source": ["none", "url(image.png)"],
            "mask-border-mode": ["luminance ", "alpha"],
            "mask-border-slice": ["0 fill", "50% fill", "1.1 fill", "0 1 fill", "0 1 2 fill", "0 1 2 3 fill"],
            "mask-border-width": ["auto", "10px", "50%", "1", "1.0", "auto 1", "auto 1 50%", "auto 1 50% 1.1"],
            "mask-border-outset": ["0", "1.1", "0 1", "0 1 2", "0 1 2 3"],
            "mask-border-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
            "mask-border": ["url(image.png)", "url(image.png) 10px", "url(image.png) space", "url(image.png) 1 fill", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px 2"],
            "mask-source-type": ["luminance", "alpha"]
        }
    },

    "compositing-1": {
        "title": "Compositing and Blending",
        "group": "fxtf",
        "properties": {
            "mix-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            "isolation": ["auto", "isolate"],
            "background-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal, multiply"]
        }
    },

    //filters-1
    "filter-effects": {
        "title": "Filter Effects Module Level 1",
        "group": "fxtf",
        "properties": {
            "filter": ["none", "url(#id)", "url(image.svg#id)", "blur(5px)", "brightness(0.5)", "contrast(150%)", "drop-shadow(15px 15px 15px black)", "grayscale(50%)", "hue-rotate(50deg)", "invert(50%)", "opacity(50%)", "sepia(50%)", "saturate(150%)", "grayscale(100%) sepia(100%)"],
        }
    },

    //WebKit(-webkit-backdrop-filter): http://trac.webkit.org/changeset/175716
    //Demo: http://codepen.io/TheNix/pen/KwKQGx
    "filters-2": {
        "title": "Filter Effects Module Level 2",
        "group": "fxtf",
        "properties": {
            "backdrop-filter": ["none", "url(#id)", "url(image.svg#id)", "blur(5px)", "brightness(0.5)", "contrast(150%)", "drop-shadow(15px 15px 15px black)", "grayscale(50%)", "hue-rotate(50deg)", "invert(50%)", "opacity(50%)", "sepia(50%)", "saturate(150%)", "grayscale(100%) sepia(100%)"],
        }
    },

    "pointerevents": {
        "title": "Pointer Events",
        "properties": {
            "touch-action": ["auto", "none", "pan-x", "pan-y", "pan-x pan-y", "manipulation"]
        }
    },

    "css-will-change": {
        "title": "Will Change",
        "properties": {
            "will-change": ["auto", "scroll-position", "contents", "transform"]
        }
    },

    "css3-break": {
        "title": "Fragmentation",
        "properties": {
            "break-after": ["any", "recto", "verso"],
            "break-before": ["any", "recto", "verso"],
            "break-inside": ["avoid-region"],
            "orphans": ["1", "2"],
            "widows": ["1", "2"]
        }
    },

    "css-logical-props": {
        "title": "Logical Properties",
        "properties": {
            "caption-side": ["block-start", "block-end", "inline-start", "inline-end"],
            "float": ["inline-start", "inline-end"],
            "clear": ["inline-start", "inline-end"],
            "text-align": ["start", "end"],
            "resize": ["block", "inline"],
            "inline-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "block-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "min-inline-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "min-block-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "max-inline-size": ["20px", "15%", "none", "fill", "min-content", "max-content", "fit-content"],
            "max-block-size": ["20px", "15%", "none", "fill", "min-content", "max-content", "fit-content"],
            "offset-block-start": ["20px", "15%", "auto"],
            "offset-block-end": ["20px", "15%", "auto"],
            "offset-inline-start": ["20px", "15%", "auto"],
            "offset-inline-end": ["20px", "15%", "auto"],

            "margin-block-start": ["20px", "15%", "auto"],
            "margin-block-end": ["20px", "15%", "auto"],
            "margin-inline-start": ["20px", "15%", "auto"],
            "margin-inline-end": ["20px", "15%", "auto"],
            "padding-block-start": ["20px", "15%"],
            "padding-block-end": ["20px", "15%"],
            "padding-inline-start": ["20px", "15%"],
            "padding-inline-end": ["20px", "15%"],
            "border-block-start": ["20px solid blue"],
            "border-block-end": ["20px solid blue"],
            "border-inline-start": ["20px solid blue"],
            "border-inline-end": ["20px solid blue"],

            //旧版本
            "margin-before": ["20px", "15%", "auto"],
            "margin-after": ["20px", "15%", "auto"],
            "margin-start": ["20px", "15%", "auto"],
            "margin-end": ["20px", "15%", "auto"],
            "padding-before": ["20px", "15%"],
            "padding-after": ["20px", "15%"],
            "padding-start": ["20px", "15%"],
            "padding-end": ["20px", "15%"],
            "border-before": ["20px solid blue"],
            "border-after": ["20px solid blue"],
            "border-start": ["20px solid blue"],
            "border-end": ["20px solid blue"],

            "background-repeat": ["logical repeat-x", "logical repeat-x no-repeat"],
            "background-image-transform": ["logical", "physical", "rotate"],
            "border-image-transform": ["logical", "physical", "rotate"]
        },
        "values": {
            "properties": [
                "margin",
                "padding",
                "border-width",
                "border-color",
                "border-style"
            ],
            "logical": [
                "logical 10px 23% 3em 0",
                "logical red green blue yellow", //border-color
                "logical solid dotted dashed none" //border-style
            ]
        },
    },

    "cssom-view": {
        "title": "CSSOM View Module",
        "properties": {
            "scroll-behavior": ["auto", "smooth", "auto"]
        }
    },

    "css-snappoints": {
        "title": "CSS Scroll Snap Points Module",
        "properties": {
            "scroll-snap-type": ["none", "mandatory", "proximity"],
            "scroll-snap-points-x": ["repeat(100%)", "repeat(50px)"],
            "scroll-snap-points-y": ["repeat(100%)", "repeat(50px)"],
            "scroll-snap-destination": ["0 0", "20px 90px", "center bottom", "bottom 10px right 20px"],
            "scroll-snap-coordinate": ["none", "0 0", "20px 90px", "center bottom", "bottom 10px right 20px"]
        }
    },

    // 参考 css-shapes 语法
    //https://code.google.com/p/chromium/issues/detail?id=416731
    //https://code.google.com/p/chromium/issues/detail?id=464242
    "motion-1": {
        "title": "Motion Path Module Level 1",
        "group": "fxtf",
        "properties": {
            "motion-path": ["none", "url(../images/foo.svg)", "path('M 1 2 V 3')", "polygon(0% 50%, 50% 100%, 0 100%)", "fill-box", "stroke-box", "view-box"],
            "motion-offset": ["0", "123px", "123vw", "18rem", "-200px", "30%", "unset"],
            "motion-rotation": ["auto", "0", "reverse", "-45deg", "auto 180deg", "reverse 45deg", "2turn reverse"],
            "motion": ["none 50% auto 400grad", "path('M 20 20 H 80 V 30') 0rad 100px", "10px 90deg reverse none", "path('M 1 2 V 3') 4px 5deg", "none 10px reverse 90deg"],
        }
    },

    "css-device-adapt": {
        "title": "CSS Device Adaptation",
        "@rules": {
            "@viewport": [
                "@viewport"
            ]
        },
        "properties": {
            "width": ["auto", "320px", "63%", "320px auto", "device-width", "device-height", "extend-to-zoom", "extend-to-zoom 500px"],
            "height": ["auto", "320px", "63%", "320px auto", "device-width", "device-height", "extend-to-zoom", "extend-to-zoom 500px"],

            "min-width": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],
            "max-width": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],
            "min-height": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],
            "max-height": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],

            "zoom": ["auto", "2", "1.5", ".5", "63%"],
            "min-zoom": ["auto", "2", "1.5", ".5", "63%"],
            "max-zoom": ["auto", "2", "1.5", ".5", "63%"],
            "user-zoom": ["zoom", "fixed"],
            "orientation": ["auto", "portrait", "landscape"],
        }
    },

    "css-size-adjust": {
        "title": "CSS Mobile Text Size Adjustment",
        "properties": {
            "text-size-adjust": ["auto", "none", "32.56%", "189%"]
        }
    }
};
