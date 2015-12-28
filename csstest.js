var Score = function(parent) {
	this.passed = this.total =
	this.passedTests = this.totalTests = 0;
	
	this.parent = parent || null;
};

Score.prototype = {
	update: function(data) {
		if(!data.total) { return; }
		
		this.passedTests += data.passed;
		this.totalTests += data.total;
		
		this.total++;
		this.passed += data.passed / data.total;
		
		if(this.parent) {
			this.parent.update(data);
		}
	},
	
	toString: function() {
		return this.percent() + '%';
	},
	
	percent: function() {
		return Math.round(100 * this.passed / this.total);
	}
};

var mainScore = new Score(), _bTestResults = {};

var Test = function (tests, spec, title) {
	this.tests = tests;
	this.id = spec;
	this.title = title;
	
	this.score = new Score(mainScore);
	
	var 
	h1 = $u.element.create({
		tag: 'h1',
		contents: [
			this.title,
			$u.element.create({
				tag: 'a',
				properties: {
					href: 'http://w3.org/TR/' + this.id,
					target: '_blank',
					textContent: 'TR',
					className: 'spec-link'
				}
			}),
			$u.element.create({
				tag: 'a',
				properties: {
					href: 'http://dev.w3.org/csswg/' + this.id,
					target: '_blank',
					textContent: 'DEV',
					className: 'spec-link'
				}
			})
		]
	}), valuesSection;
	
	// Wrapper section
	this.section = $u.element.create({
		tag: 'section',
		properties: {
			id: this.id,
			className: 'tests'
		},
		contents: [h1]
	});
	
	// Perform tests
	for(var id in Test.groups) {
		this.group(id, Test.groups[id]);
	}
	
	// Add overall spec score to BrowserScope
	_bTestResults[this.id] = mainScore.percent();
	
	// Display score for this spec
	$u.element.create({
		tag: 'span',
		contents: this.score + '',
		properties: {
			className: 'score'
		},
		inside: h1
	});
	
	all.appendChild(this.section);
	
	// Add to list of tested specs
	$u.element.create({
		tag: 'li',
		properties: {
			className: passclass({ passed: this.score.passed, total: this.score.total }),
			title: this.score + ' passed'
		},
		contents: [
			$u.element.create({
				tag: 'a',
				prop: {
					href: '#' + spec
				},
				contents: title
			})
		],
		inside: specsTested
	});
}

Test.prototype = {
	group: function(what, testCallback) {
		var thisSection, theseTests = this.tests[what];
		
		for(var feature in theseTests) {
			if(feature === 'properties') {
				continue;
			}
			
			thisSection = thisSection || $u.element.create({
				tag: 'section',
				properties: {
					className: 'tests ' + what
				},
				contents: $u.element.create({
						tag: 'h1',
						contents: what
					}),
				inside: this.section
			});
			
			var dl = document.createElement('dl'),
			    dt = $u.element.create({
				tag: 'dt',
				prop: {
					textContent: feature,
					tabIndex: '0'
				},
				inside: dl
			});
			
			var passed = 0, tests = theseTests[feature];
		
			tests = tests instanceof Array? tests : [tests];
		
			for(var i=0, test; test = tests[i++];) {
				var results = testCallback(test, feature, theseTests),
				    success, note;
				
				if(typeof results === 'object') {
					success = results.success;
					note = results.note;
				}
				else { success = +!!results }
				
				passed += +success;
				
				$u.element.create({
					tag: 'dd',
					prop: {
						innerHTML: test + (note? '<small>' + note + '</small>' : ''),
						className: passclass({passed: Math.round(success * 10000), total: 10000 })
					},
					inside: dl
				});
			}
			
			this.score.update({passed: passed, total: tests.length });
			
			dt.className = passclass({ passed: passed, total: tests.length });
			
			thisSection.appendChild(dl);
			
			// Add to browserscope
			_bTestResults[this.id + ' / ' + feature.replace(/[,=]/g, '')] = Math.round(100 * passed / tests.length);
		}
	}
}

Test.groups = {
	'values': function(test, label, tests) {
		var properties = tests.properties,
			failed = [];
	
		for(var j=0, property; property = properties[j++];) {
			if(!Supports.property(property)) {
				properties.splice(--j, 1);
				continue;
			}
			
			if(!Supports.value(property, test)) {
				failed.push(property);
			}
		}
		
		success = 1 - failed.length / properties.length;
		
		return {
			success: success,
			note: success > 0 && success < 1? 'Failed in: ' + failed.join(', ') : ''
		}
	},
	
	'properties': function(value, property) {
		return Supports.value(property, value);
	},
	
	'selectors': function(test) {
		return Supports.selector(test);
	},
	
	'@rules': function(test) {
		return Supports.atrule(test);
	},
	
	'Media queries': function(test) {
		var matches = matchMedia(test);
		
		return matches.media !== 'invalid' && matches.matches;
	}
};

function passclass(info) {
	var success;
	
	if('passed' in info) {
		success = info.passed / info.total;
	}
	else if('failed' in info) {
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

document.onclick = function(evt) {
	var target = evt.target;
	
	if(/^dt$/i.test(target.nodeName)) {
		evt.stopPropagation();
		
		var dl = target.parentNode;
		
		dl.className = dl.className === 'open'? '' : 'open';
	}
}

Array.prototype.and = function(arr2, separator) {
	separator = separator || ' ';
	
	var ret = [],
		map = function(val) {
			return val + separator + arr2[j]
		};
	
	for(var j=0; j<arr2.length; j++) {
		ret = ret.concat(this.map(map));
	}
	
	return ret;
};

// [ x or y or z ]{min, max}
Array.prototype.times = function(min, max, separator) {
	separator = separator || ' ';

	max = max || min;
	
	var ret = [];
	
	
	if(min === max) {
		if(min === 1) {
			ret = this.slice(); // clone
		}
		else {
			ret = this.and(this, separator);
			
			for(var i=2; i<min; i++) {
				ret = this.and(ret, separator);
			}
		}
	}
	else if(min < max) {
		for(var i=min; i<=max; i++) {
			ret = ret.concat(this.times(i, i, separator));
		}
	}
	
	return ret;
};

onload = function() {
	var timeBefore = +new Date,
		duration = 0;
	
	var specs = [];
	
	for(var spec in Specs) {
		specs.push(spec);
	}
	
	(function() {
		if(specs.length) {
			// Get spec id
			var spec = specs.shift();
			
			// Run tests
			var test = new Test(Specs[spec], spec, Specs[spec].title);
			
			// Count test duration
			duration += +new Date - timeBefore;
			timeBefore = +new Date;
			
			// Output current score
			score.textContent = mainScore + '';
			passedTests.textContent = ~~mainScore.passedTests;
			totalTests.textContent = mainScore.totalTests;
			total.textContent = mainScore.total;
			
			// Schedule next test
			setTimeout(arguments.callee, 50)
		}
		else {
			// Done!
			
			// Display time taken
			timeTaken.textContent = +new Date - timeBefore + 'ms';
			
			// Send to Browserscope
			var testKey = 'agt1YS1wcm9maWxlcnINCxIEVGVzdBidzawNDA';
			
			_bTestResults['Overall'] = mainScore.percent();
			  
			$u.element.create({
				tag: 'script',
				properties: {
					src: '//www.browserscope.org/user/beacon/' + testKey
				},
				inside: $('head')
			});
		}
	})();
	
	
	
	
}