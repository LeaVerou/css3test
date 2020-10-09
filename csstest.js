var Score = function (parent) {
	this.passed = this.total = this.passedTests = this.totalTests = 0;
	this.parent = parent || null;
};

var ele = function (name) {
	return document.getElementById(name);
}

Score.prototype = {
	update: function (data) {
		if (!data.total) { return; }

		this.passedTests += data.passed;
		this.totalTests += data.total;

		this.total++;
		this.passed += data.passed / data.total;

		if (this.parent) {
			this.parent.update(data);
		}
	},

	toString: function () {
		return this.percent() + '%';
	},

	percent: function () {
		return Math.round(100 * this.passed / this.total);
	}
};

var mainScore = new Score(),
	_bTestResults = {};

var devLinkFormat = function (params) {
	switch (params.devtype) {
		case "fxtf":
			// FX Task Force Editor Drafts
			return 'https://drafts.fxtf.org/' + params.dev;
		case "houdini":
			// CSS-TAG Houdini Editor Drafts
			return 'https://drafts.css-houdini.org/' + params.dev;
		case "github":
			return 'https://w3c.github.io/' + params.dev;
		case "svgwg":
			// SVG Working Group Editor Drafts
			return 'https://svgwg.org/' + params.dev;
		case "whatwg":
			// WHATWG
			return 'https://' + params.dev + '.spec.whatwg.org/';
		default:
			// CSS Working Group Editor Drafts
			return 'https://drafts.csswg.org/' + params.dev;
	}
};


var devLinkLogo = function (params) {
	switch (params.devtype) {
		case "whatwg":
			return params.devtype;
		case "svgwg":
		case "houdini":
		case "fxtf":
		case "github":
		default:
			return 'w3c';
	}
};

var Test = function (spec) {
	this.tests = spec.tests;
	this.id = spec.id;
	this.title = spec.tests.title;

	this.score = new Score(mainScore);

	var contents = [this.title];

	if (spec.tests.links) {
		if (spec.tests.links.tr) {
			contents.push($.create({
				tag: 'a',
				properties: {
					href: 'https://www.w3.org/TR/' + spec.tests.links.tr,
					target: '_blank',
					textContent: 'TR',
					className: 'spec-link w3c-link'
				}
			}));
		}

		if (spec.tests.links.dev) {
			contents.push($.create({
				tag: 'a',
				properties: {
					href: devLinkFormat(spec.tests.links),
					target: '_blank',
					textContent: 'DEV',
					className: 'spec-link ' + devLinkLogo(spec.tests.links) + '-link'
				}
			}));
		}

		if (spec.tests.links.mdn) {
			contents.push($.create({
				tag: 'a',
				properties: {
					href: 'https://developer.mozilla.org/en-US/docs/' + spec.tests.links.mdn,
					target: '_blank',
					textContent: 'MDN',
					className: 'spec-link mdn-link'
				}
			}));
		}
	}

	var h1 = $.create({
		tag: 'h1',
		contents: contents
	});

	// Wrapper section
	this.section = $.create({
		tag: 'section',
		id: this.id,
		className: 'tests',
		contents: [h1]
	});

	// Perform tests
	for (var id in Test.groups) {
		this.group(id, Test.groups[id]);
	}

	// Add overall spec score to BrowserScope
	_bTestResults[this.id] = mainScore.percent();

	// Display score for this spec
	$.create({
		tag: 'span',
		contents: this.score + '',
		className: 'score',
		inside: h1
	});

	ele('all').appendChild(this.section);

	// Add to list of tested specs
	$.create({
		tag: 'li',
		className: passclass({ passed: this.score.passed, total: this.score.total }),
		title: this.score + ' passed',
		contents: [
			{
				tag: 'a',
				href: '#' + spec.id,
				contents: this.title
			}
		],
		inside: ele('specsTested')
	});
}

Test.prototype = {
	group: function (what, testCallback) {
		var thisSection, theseTests = this.tests[what];

		for (var feature in theseTests) {
			if (feature === 'properties') {
				continue;
			}

			thisSection = thisSection || $.create({
				tag: 'section',
				className: 'tests ' + what,
				contents: {
					tag: 'h1',
					contents: what
				},
				inside: this.section
			});

			var dl = document.createElement('dl');
			var dtContents = [
				document.createTextNode(feature),
				null // for prefix
			];

			var links = theseTests[feature].links;
			if (links) {
				if (links.tr) {
					dtContents.push($.create({
						tag: 'a',
						properties: {
							href: 'https://www.w3.org/TR/' + this.tests.links.tr + links.tr,
							target: '_blank',
							textContent: 'TR',
							className: 'spec-link w3c-link'
						}
					}));
				}

				if (links.dev) {
					dtContents.push($.create({
						tag: 'a',
						properties: {
							href: devLinkFormat(this.tests.links) + links.dev,
							target: '_blank',
							textContent: 'DEV',
							className: 'spec-link ' + devLinkLogo(this.tests.links) + '-link'
						}
					}));
				}

				var mdnLink = 'https://developer.mozilla.org/en-US/docs/Web/';
				switch (links.mdnGroup) {
					case 'SVG':
						mdnLink += 'SVG/Attribute/';
						break;
					default:
						mdnLink += 'CSS/';
						// add exception for Media Queries if no link define
						if (what === "Media queries" && !links.mdn) {
							mdnLink += '@media/';
						}
						break;
				}
				mdnLink += !links.mdn
					? feature.replace('()', '')
					: links.mdn;

				dtContents.push($.create({
					tag: 'a',
					properties: {
						href: mdnLink,
						target: '_blank',
						textContent: 'MDN',
						className: 'spec-link mdn-link'
					}
				}));
			}

			var passed = 0,
				tests = theseTests[feature].tests || theseTests[feature],
				propertyPrefix = null,
				testsResults = [];

			tests = tests instanceof Array ? tests : [tests];

			for (var i = 0, test; test = tests[i++];) {
				var results = testCallback(test, feature, theseTests),
					success, prefix, propertyPrefix, note;

				if (typeof results === 'object') {
					success = results.success;
					propertyPrefix = propertyPrefix || results.propertyPrefix;
					prefix = results.prefix;
					note = results.note;
				}

				passed += +success;

				testsResults.push({
					tag: 'dd',
					innerHTML: test
						+ (prefix ? '<span class="prefix">' + prefix + '</span>' : '')
						+ (note ? '<small>' + note + '</small>' : ''),
					className: passclass({ passed: Math.round(success * 10000), total: 10000 }),
					inside: dl
				});
			}

			if (propertyPrefix) {
				dtContents[1] = $.create({
					tag: 'span',
					className: 'prefix',
					textContent: propertyPrefix
				});
			}

			var dt = $.create({
				tag: 'dt',
				tabIndex: '0',
				contents: dtContents,
				inside: dl
			});

			for (var j = 0; j < testsResults.length; j++) {
				$.create(testsResults[j]);
			}

			this.score.update({ passed: passed, total: tests.length });

			dt.className = passclass({ passed: passed, total: tests.length });

			thisSection.appendChild(dl);

			// Add to browserscope
			_bTestResults[this.id + ' / ' + feature.replace(/[,=]/g, '')] = Math.round(100 * passed / tests.length);
		}
	}
}

Test.groups = {
	'values': function (test, label, tests) {
		var properties = tests.properties,
			failed = [];

		for (var j = 0, property; property = properties[j++];) {
			if (!Supports.property(property).success) {
				properties.splice(--j, 1);
				continue;
			}

			if (!Supports.value(property, test).success) {
				failed.push(property);
			}
		}

		success = 1 - failed.length / properties.length;

		return {
			success: success,
			note: success > 0 && success < 1 ? 'Failed in: ' + failed.join(', ') : ''
		}
	},

	'properties': function (value, property) {
		return Supports.value(property, value);
	},

	'descriptors': function (value, descriptor) {
		return Supports.descriptorvalue(descriptor, value);
	},

	'selectors': function (test) {
		return Supports.selector(test);
	},

	'declaration': function (test) {
		return Supports.declaration(test);
	},

	'@rules': function (test) {
		return Supports.atrule(test);
	},

	'Media queries': function (test) {
		var matches = matchMedia(test);
		if (matches.media !== 'invalid' && matches.matches) {
			return { success: true };
		}
		else {
			var matches = matchMedia('not ' + test);
			return { success: matches.media !== 'invalid' && matches.matches }
		}
	}
};

function passclass(info) {
	var success;

	if ('passed' in info) {
		success = info.passed / info.total;
	}
	else if ('failed' in info) {
		success = 1 - info.failed / info.total;
	}

	var classes = [
		'epic-fail',
		'fail',
		'very-buggy',
		'buggy',
		'slightly-buggy',
		'almost-pass',
		'pass'
	];

	var index = Math.round(success * (classes.length - 1));

	return classes[index];
}

document.onclick = function (evt) {
	var target = evt.target;

	if (/^dt$/i.test(target.nodeName)) {
		evt.stopPropagation();

		var dl = target.parentNode;

		dl.className = dl.className === 'open' ? '' : 'open';
	}
}

Array.prototype.and = function (arr2, separator) {
	separator = separator || ' ';

	var ret = [],
		map = function (val) {
			return val + separator + arr2[j]
		};

	for (var j = 0; j < arr2.length; j++) {
		ret = ret.concat(this.map(map));
	}

	return ret;
};

// [ x or y or z ]{min, max}
Array.prototype.times = function (min, max, separator) {
	separator = separator || ' ';

	max = max || min;

	var ret = [];


	if (min === max) {
		if (min === 1) {
			ret = this.slice(); // clone
		}
		else {
			ret = this.and(this, separator);

			for (var i = 2; i < min; i++) {
				ret = this.and(ret, separator);
			}
		}
	}
	else if (min < max) {
		for (var i = min; i <= max; i++) {
			ret = ret.concat(this.times(i, i, separator));
		}
	}

	return ret;
};

onload = function () {
	var timeBefore = +new Date,
		duration = 0,
		specs = [];

	for (var spec in Specs) {
		specs.push({
			id: spec,
			tests: Specs[spec]
		});
	}

	specs.sort(function (a, b) {
		return a.tests.title.localeCompare(b.tests.title);
	});


	(function () {
		if (specs.length) {
			// Get spec id
			var spec = specs.shift();

			// Run tests
			var test = new Test(spec);

			// Count test duration
			duration += +new Date - timeBefore;
			timeBefore = +new Date;

			// Output current score
			ele('score').textContent = mainScore + '';
			ele('passedTests').textContent = ~~mainScore.passedTests;
			ele('totalTests').textContent = mainScore.totalTests;
			ele('total').textContent = mainScore.total;

			// Schedule next test
			setTimeout(arguments.callee, 50)
		}
		else {
			// Done!

			// Display time taken
			ele('timeTaken').textContent = +new Date - timeBefore + 'ms';

			// Send to Browserscope
			var testKey = 'agt1YS1wcm9maWxlcnINCxIEVGVzdBidzawNDA';

			_bTestResults['Overall'] = mainScore.percent();

			$.create({
				tag: 'script',
				src: '//www.browserscope.org/user/beacon/' + testKey,
				inside: $('head')
			});
		}
	})();




}
