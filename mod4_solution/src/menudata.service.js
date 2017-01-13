(function (){
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);


	MenuDataService.$inject = ['$http']
	function MenuDataService($http){
		var service = this;		

		service.getAllCategories = function(){
			var response = $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/categories.json"
			});

			return response.then(function(result){
				var categories = [];
				categories = result.data;
				return categories;
			});
		};

		service.getItemsForCategory = function(categoryShortName){
			var response = $http({
					method: "GET",
					url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
				});

				return response.then(function(result){
					var items = [];
					items = result.data;
					return items;
				});
		};

	}
})();