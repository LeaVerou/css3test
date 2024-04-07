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

	var _ = (window.Supports = {
		prefixes: ['', '-moz-', '-webkit-', '-o-', '-ms-', 'ms-', '-khtml-'],
		domPrefixes: ['', 'Moz', 'Webkit', 'WebKit'],

		property: function (property) {
			if (property.charAt(0) === '-') {
				return {
					success: camelCase(property) in inline ? true : false,
					property: property,
				};
			}

			if (!_.property.cached) {
				_.property.cached = {};
			} else if (_.property.cached[property]) {
				return {
					success: true,
					property: _.property.cached[property].property,
					prefix: _.property.cached[property].prefix,
				};
			}

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = _.prefixes[i] + property;

				if (camelCase(prefixed) in inline) {
					_.property.cached[property] = {
						property: prefixed,
						prefix: _.prefixes[i],
					};
					return {
						success: true,
						property: prefixed,
						prefix: _.prefixes[i],
					};
				}
			}

			_.property.cached[property] = false;
			return {
				success: false,
				property: property,
			};
		},

		value: function (property, value) {
			property = _.property(property);

			if (!property.success) {
				return property;
			}
			propertyPrefix = property.prefix;
			property = camelCase(property.property);

			inline.cssText = '';
			inline[property] = '';

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = _.prefixes[i] + value;

				try {
					inline[property] = prefixed;
				} catch (e) {}

				if (inline.length > 0) {
					return {
						success: true,
						prefix: _.prefixes[i],
						propertyPrefix: propertyPrefix,
					};
				}
			}

			return {
				success: false,
			};
		},

		descriptorvalue: function (descriptor, value, required) {
			/* doesn't handle prefixes for descriptor or value */
			var add = '',
				pos = 0;
			if (descriptor.match(/@.*\//)) {
				var part = descriptor.split('/');
				var rule = part[0];
				descriptor = part[1];

				if (required) {
					if (required.rule) {
						rule = required.rule + ' ' + rule;
						pos = 1;
					}
					if (required.descriptor) {
						add = required.descriptor + '; ';
					}
				}
			} else {
				var rule = '@font-face';
			}

			style.textContent = rule + ' {' + add + descriptor + ':' + value + '}';
			try {
				if (style.sheet.cssRules.length) {
					return {
						success:
							(style.sheet.cssRules[pos].style && style.sheet.cssRules[pos].style.length >= 1) ||
							style.sheet.cssRules[pos][camelCase(descriptor)] !== undefined,
					};
				} else {
					return { success: false };
				}
			} catch (e) {
				return { success: false };
			}
		},

		selector: function (selector) {
			if (!_.selector.cached) {
				_.selector.cached = {};
			} else if (_.selector.cached[selector]) {
				return {
					success: _.selector.cached[selector],
				};
			}

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = selector.replace(/^(:+)/, '$1' + _.prefixes[i]);

				try {
					document.querySelector(prefixed);
					_.selector.cached[selector] = true;
					return {
						success: true,
						propertyPrefix: _.prefixes[i],
					};
				} catch (e) {}
			}

			_.selector.cached[selector] = false;
			return { success: false };
		},

		atrule: function (atrule) {
			if (!_.atrule.cached) {
				_.atrule.cached = {};
			} else if (_.atrule.cached[atrule]) {
				return {
					success: _.atrule.cached[atrule],
				};
			}

			for (var i = 0; i < _.prefixes.length; i++) {
				var prefixed = atrule.replace(/^@/, '@' + _.prefixes[i]);

				style.textContent = prefixed; // Safari 4 has issues with style.innerHTML

				if (style.sheet.cssRules.length > 0) {
					_.atrule.cached[atrule] = true;
					return {
						success: true,
						prefix: _.prefixes[i],
					};
				}
			}

			_.atrule.cached[atrule] = false;
			return { success: false };
		},

		mq: function (mq) {
			return {
				// We check whether the query does not include 'not all' because
				// if it does, that means the query is ignored.
				// See https://drafts.csswg.org/cssom/#parse-a-media-query-list
				success: !matchMedia(mq).media.includes('not all'),
			};
		},

		variable: function (name, value) {
			inline.setProperty(name, value);
			inline.setProperty('margin-right', 'var(' + name + ')');
			var styles = window.getComputedStyle(dummy);
			return {
				success: styles.marginRight === value,
			};
		},

		declaration: function (intruction) {
			var val = intruction.match(/\s*([^:]+)\s*:\s*(.+)\s*/);
			return {
				success: !val[1].match(/--.*/)
					? Supports.value(val[1], val[2]).success
					: Supports.variable(val[1], val[2]).success,
			};
		},

		interface: function (interface) {
			if (!_.interface.cached) {
				_.interface.cached = {};
			} else if (_.interface.cached[interface]) {
				return {
					success: true,
					interface: _.interface.cached[interface].interface,
					prefix: _.interface.cached[interface].prefix,
				};
			}

			for (var i = 0; i < _.domPrefixes.length; i++) {
				var prefixed = getPrefixedVariants(interface, _.domPrefixes[i]);

				for (var j = 0; j < prefixed.length; j++) {
					if (prefixed[j] in window) {
						_.interface.cached[interface] = {
							interface: prefixed[j],
							prefix: _.domPrefixes[i],
						};

						return {
							success: true,
							interface: prefixed[j],
							prefix: _.domPrefixes[i],
						};
					}
				}
			}

			_.interface.cached[interface] = false;
			return {
				success: false,
				interface: interface,
			};
		},

		attributeOrMethod: function (interface, attributeOrMethod, required, interfaceCallback) {
			function getInterfaceFromRules(rules, interfaceName) {
				for (var i = 0; i < rules.length; i++) {
					if (rules[i].constructor.name === interfaceName) {
						return rules[i];
					}

					if (rules[i].cssRules) {
						var interface = getInterfaceFromRules(rules[i].cssRules, interfaceName);
						if (interface) {
							return interface;
						}
					}
				}

				return null;
			}

			interface = _.interface(interface);

			if (!interface.success) {
				return interface;
			}

			// If no CSS rules are defined to test against and no interface is defined explicitly,
			// only return the interface info
			if (!required && !interfaceCallback) {
				return interface;
			}

			style.textContent = required;

			var cssInterface = null;
			try {
				if (interfaceCallback) {
						cssInterface = interfaceCallback(style);
				} else {
					cssInterface = getInterfaceFromRules(style.sheet.cssRules, interface.interface);
				}
			} catch (e) {
				return interface;
			}

			if (cssInterface) {
				for (var i = 0; i < _.domPrefixes.length; i++) {
					var prefixed = _.domPrefixes[i] + attributeOrMethod;

					if (prefixed in cssInterface) {
						return {
							success: true,
							prefix: _.domPrefixes[i],
							interfacePrefix: interface.prefix,
						};
					}
				}
			}

			return {
				success: false,
			};
		},
	});

	/**
	 * Private
	 */
	function camelCase(str) {
		return str
			.replace(/-([a-z])/g, function ($0, $1) {
				return $1.toUpperCase();
			})
			.replace('-', '');
	}

	function getPrefixedVariants(featureName, prefix) {
		return [
			prefix + featureName,
			featureName.replace('CSS', 'CSS' + prefix),
		]
	}
})();
