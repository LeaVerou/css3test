(function() {
	$('#filter').addEventListener('change', evt => {
		localStorage.setItem('filter', evt.target.value);
		resetOutput();
		runTests(evt.target.value);
	});
})();