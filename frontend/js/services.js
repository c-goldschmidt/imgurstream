app.factory('Imgur', ['$resource', '$location', function($resource, $location) {
	var url = 'http://' + $location.host() + ':9001/:gallery/:sort/:showViral';
	console.debug(url);		
	return $resource(
		url,
		{
			gallery: '@gallery',
			sort: '@sort',
			showViral: '@showViral'
		},
		{
			get: {method: 'GET', isArray:false}
		}
	);
}]);
