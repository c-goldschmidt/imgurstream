app.controller('MainController', [
	'$scope', '$interval', '$timeout', 'Imgur', 
	function($scope, $interval, $timeout, Imgur) {
		function anim(count, delta, callback){
			$scope.nextOpacity += delta;
			if(count > 0){
				$timeout(function(){
					$scope.$apply(function(){
						anim(count-1, delta, callback);
					});
				}, 5);
			} else {
				callback();
			}
		}
		
		function switchToImage(url){
			$scope.nextImage = url;
			$scope.nextOpacity = 0;
			anim(100, 0.01, function(){
				$scope.currentImage = url;	
			});			
		}
		
		function refresh(){
			Imgur.get().$promise.then(function(data){
				switchToImage(data.url)	
			});
		}

		$scope.currentImage = '';
		$scope.nextImage = '';
		$scope.nextOpacity = 0;

		refresh();
		$interval(function(){
			refresh();
		}, 20000);
	}
]);
