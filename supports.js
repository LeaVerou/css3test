/*! matchMedia() polyfill - Test a CSS media type/query in JS. 
Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || (function (doc, undefined) {

	var bool,
		docElem = doc.documentElement,
		refNode = docElem.firstElementChild || docElem.firstChild,
		// fakeBody required for <FF4 when executed in <head>
		fakeBody = doc.createElement('body'),
		div = doc.createElement('div');

	div.id = 'mq-test-1';
	div.style.cssText = "position:absolute;top:-100em";
	fakeBody.appendChild(div);

	return function (q) {

		div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';

		docElem.insertBefore(fakeBody, refNode);
		bool = div.offsetWidth == 42;
		docElem.removeChild(fakeBody);

		return { matches: bool, media: q };
	};

})(document);


(function () {

	/**
	 * Setup dummy elements
	 */
	var dummy = document.createElement('_'),
		inline = dummy.style,
		style = document.createElement('style');

	document.documentElement.appendChild(style);
	dummy.setAttribute('data-foo', 'bar');
	dummy.setAttribute('data-px', '1px');
	document.documentElement.appendChild(dummy);

	var _ = window.Supports = {
		prefixes: ['', '-moz-', '-webkit-', '-o-', '-ms-', 'ms-', '-khtml-'],

		property: function (property) {
			if (property.charAt(0) === '-') {
				return {
					success: camelCase(property) in inline ? true : false,
					property: property
				};
			}

			if (!_.property.cached) {
				_.property.cached = {};
			}
			else if (_.property.cached[property]) {
				return {
					success: true,
					property: _.property.cached[property].property,
					prefix: _.property.cached[property].prefix
				};
			}

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = _.prefixes[i] + property;

				if (camelCase(prefixed) in inline) {
					_.property.cached[property] = { property: prefixed, prefix: _.prefixes[i] };
					return {
						success: true,
						property: prefixed,
						prefix: _.prefixes[i]
					};
				}
			}

			_.property.cached[property] = false;
			return {
				success: false,
				property: property
			};
		},

		value: function (property, value) {
			property = _.property(property);

			if (!property.success) {
				return property;
			}
			propertyPrefix = property.prefix
			property = camelCase(property.property);

			inline.cssText = '';
			inline[property] = '';

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = _.prefixes[i] + value;

				try {
					inline[property] = prefixed;
				} catch (e) { }

				if (inline.length > 0) {
					return {
						success: true,
						prefix: _.prefixes[i],
						propertyPrefix: propertyPrefix
					};
				}
			}

			return {
				success: false
			};
		},

		descriptorvalue: function (descriptor, value) {
			/* doesn't handle prefixes for descriptor or value */
			if (descriptor.match(/@.*\//)) {
				var part = descriptor.split('/');
				var rule = part[0];
				descriptor = part[1];
			} else {
				var rule = '@font-face'
			}

			style.textContent = rule + " {" + descriptor + ":" + value + "}";
			try {
				return {
					success: style.sheet.cssRules.length == 1
						&& style.sheet.cssRules[0].style.length == 1
				};
			} catch (e) {
				return { success: false };
			}
		},

		selector: function (selector) {
			if (!_.selector.cached) {
				_.selector.cached = {};
			}
			else if (_.selector.cached[selector]) {
				return {
					success: _.selector.cached[selector]
				};
			}

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = selector.replace(/^(:+)/, '$1' + _.prefixes[i]);

				try {
					document.querySelector(prefixed);
					_.selector.cached[selector] = true;
					return {
						success: true,
						propertyPrefix: _.prefixes[i]
					};
				}
				catch (e) { }
			}

			_.selector.cached[selector] = false;
			return { success: false };
		},

		atrule: function (atrule) {
			if (!_.atrule.cached) {
				_.atrule.cached = {};
			}
			else if (_.atrule.cached[atrule]) {
				return {
					success: _.atrule.cached[atrule]
				};
			}

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = atrule.replace(/^@/, '@' + _.prefixes[i]);

				style.textContent = prefixed;  // Safari 4 has issues with style.innerHTML

				if (style.sheet.cssRules.length > 0) {
					_.atrule.cached[atrule] = true;
					return {
						success: true,
						prefix: _.prefixes[i]
					};
				}
			}

			_.atrule.cached[atrule] = false;
			return { success: false };
		},

		mq: function (mq) {
			if (window.matchMedia) {
				return {
					success: matchMedia(mq).media !== 'invalid'
						? true
						: matchMedia('not ' + mq).media !== 'invalid'
				};
			}
			else {
				style.textContent = '@media ' + mq + '{ foo {} }';

				if (style.sheet.cssRules.length > 0) {
					return {
						success: true
					};
				} else {
					style.textContent = '@media not ' + mq + '{ foo {} }';

					return {
						success: style.sheet.cssRules.length > 0 ? mq : false
					};
				};
			}
		},

		variable: function (name, value) {
			inline.setProperty(name, value);
			inline.setProperty('margin-right', 'var(' + name + ')');
			var styles = window.getComputedStyle(dummy);
			return {
				success: styles.marginRight === value
			};
		},

		declaration: function (intruction) {
			var val = intruction.match(/\s*([^:]+)\s*:\s*(.+)\s*/);
			return {
				success: !val[1].match(/--.*/)
					? Supports.value(val[1], val[2]).success
					: Supports.variable(val[1], val[2]).success
			};
		}
	};

	/**
	 * Private
	 */
	function camelCase(str) {
		return str.replace(/-([a-z])/g, function ($0, $1) { return $1.toUpperCase(); }).replace('-', '');
	}

})();
