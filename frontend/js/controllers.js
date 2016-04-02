app.controller('MainController', [
	'$scope', '$interval', 'Imgur', 
	function($scope, $interval, Imgur) {
		function switchToImage(url){
			$scope.currentImage = url;
			$scope.nextImage = url;
			
		};
		
		function refresh(){
			Imgur.get().$promise.then(function(data){
				switchToImage(data.url)	
			});
		}
		
		$interval(function(){
			refresh();
		}, 20000);
	}
]);