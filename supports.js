/*! matchMedia() polyfill - Test a CSS media type/query in JS. 
Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || (function(doc, undefined){
  
  var bool,
      docElem  = doc.documentElement,
      refNode  = docElem.firstElementChild || docElem.firstChild,
      // fakeBody required for <FF4 when executed in <head>
      fakeBody = doc.createElement('body'),
      div      = doc.createElement('div');
  
  div.id = 'mq-test-1';
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.appendChild(div);
  
  return function(q){
    
    div.innerHTML = '&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';
    
    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth == 42;  
    docElem.removeChild(fakeBody);
    
    return { matches: bool, media: q };
  };
  
})(document);


(function(){

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
	
	property: function(property) {
		if(property.charAt(0) === '-') {
			return camelCase(property) in inline? property : false;
		}
		
		if(!_.property.cached) {
			_.property.cached = {};
		}
		else if(_.property.cached[property]) {
			return _.property.cached[property];
		}
		
		for(var i=0; i<_.prefixes.length; i++) {
			var prefixed = _.prefixes[i] + property;

			if(camelCase(prefixed) in inline) {
				return _.property.cached[property] = prefixed;
			}
		}
				
		return _.property.cached[property] = false;
	},
	
	value: function(property, value) {
		property = _.property(property);
		
		if(!property) { return false; }
		
		property = camelCase(property);
		
		inline.cssText = '';
		inline[property] = '';
		
		for(var i=0; i<_.prefixes.length; i++) {
			var prefixed = _.prefixes[i] + value;
			
			try {
				inline[property] = prefixed;
			} catch(e) {}
			
			if(inline.length > 0) {
				return prefixed;
			}
		}
		
		return false;
	},
	
	descriptorvalue: function(descriptor, value) {
		/* doesn't handle prefixes for descriptor or value */
		style.textContent = "@font-face {" + descriptor + ":" + value + "}";
		return style.sheet.cssRules.length == 1 &&
		       style.sheet.cssRules[0].style.length == 1;
	},
	
	selector: function(selector) {
		if(!_.selector.cached) {
			_.selector.cached = {};
		}
		else if(_.selector.cached[selector]) {
			return _.selector.cached[selector];
		}
		
		for(var i=0; i<_.prefixes.length; i++) {
			var prefixed = selector.replace(/^(:+)/, '$1' + _.prefixes[i]);

			try {
				document.querySelector(prefixed);
				return  _.selector.cached[selector] = prefixed;
			}
			catch (e) {}
		}
		
		return  _.selector.cached[selector] = false;
	},
	
	atrule: function(atrule) {
		if(!_.atrule.cached) {
			_.atrule.cached = {};
		}
		else if(_.selector.cached[atrule]) {
			return _.atrule.cached[atrule];
		}
		
		for(var i=0; i<_.prefixes.length; i++) {
			var prefixed = atrule.replace(/^@/, '@' + _.prefixes[i]);

			style.textContent = prefixed + '{}';  // Safari 4 has issues with style.innerHTML
			
			if(style.sheet.cssRules.length > 0) {
				return _.atrule.cached[atrule] = prefixed;
			}
		}
		
		
		
		return _.atrule.cached[atrule] = false;
	},
	
	mq: function(mq) {
		if(window.matchMedia) {
			return matchMedia(mq).media !== 'invalid';
		}
		else {
			style.textContent = '@media ' + mq + '{ foo {} }';
			
			return style.sheet.cssRules.length > 0? mq : false;
		}
	}
};

/**
 * Private
 */
function camelCase (str) {
	return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase(); }).replace('-','');
}

})();
