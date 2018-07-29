
app.directive('backImg', function(){
	function _link(scope, element){			
		updateCss = function(){			
			if(scope.backImg){
				element.css({
					'background-image': 'url(' + scope.backImg +')'
				});
			}
			if(scope.opacity){
				element.css({'opacity': scope.opacity});
            }
		};
		
		scope.$watch('backImg', updateCss);
		scope.$watch('opacity', updateCss);
	}
	
    return {
		restrict: 'A',
		link: _link,
		scope:{
			backImg: '=',
			opacity: '=?'
		}
	};
});
