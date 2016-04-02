
app.directive('backImg', function(){
	function _link(scope, element){			
		updateCss = function(){			
			if(scope.backImg){
				element.css({
					'background-image': 'url(' + scope.backImg +')'
				});
			}
		};
		
		scope.$watch('backImg', updateCss);
	}
	
    return {
		restrict: 'A',
		link: _link,
		scope:{
			backImg: '='
		}
	};
});

app.directive('opacity', function(){
	function _link(scope, element){			
		updateCss = function(){			
			if(scope.opacity){
				element.css({'opacity': opacity});
			}
		};
		
		scope.$watch('opacity', updateCss);
	}
	
    return {
		restrict: 'A',
		link: _link,
		scope:{
			opacity: '='
		}
	};
});