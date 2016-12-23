(function() {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {

		$scope.alertMessage = "";
		$scope.lunchList = "";

		$scope.checkList = function(){
			var arrayLunch=$scope.lunchList.split(",")
			var count = 0;
			for (var i=0; i < arrayLunch.length; i++){
				if (arrayLunch[i])
					count++
			};
			$scope.alertChecker(count);
		}

		$scope.alertChecker = function(itemsCount){
			if (itemsCount>3){
				$scope.alertMessage= "Too Much!";
			}
			else if(itemsCount>0){
				$scope.alertMessage= "Enjoy!";	
			}
			else{
				$scope.alertMessage= "Please enter data first";	
			}
		}

	}


})();